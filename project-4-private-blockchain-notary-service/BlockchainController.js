'use strict';

const SHA256 = require('crypto-js/sha256');
const BlockChain = require('./private-blockchain/BlockChain');
const Block = require('./private-blockchain/Block')
const Request = require('./Request')
const Validation = require('./Validation')

const EMPTY_DATA = ["", '""', "''", " ", '" "', "' '"]
/**
* Controller Definition to encapsulate routes to work with blocks
*/
class BlockController {

  /**
  * Constructor to create a new BlockchainController
  * @param {*} server
  */
  constructor(server, populate_data) {
    this.server = server;
    this.mempool = []
    this.mempoolValid = []
    this.blockChain = new BlockChain.Blockchain();
    if (populate_data) {
      this.initializeMockData();
    }

    // Automatic routing register
    // If a object function starts with 'get' or 'post', it is executed, registering its routing on the server.
    Object.getOwnPropertyNames(this.__proto__).forEach(attr => {
      if (typeof(this[attr]) == 'function') {
        if (attr.startsWith('get') || attr.startsWith('post')) {
          this[attr]()
        }
      }
    });
  }

  /**
  * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
  */
  getBlockByIndex() {
    this.server.route({
      method: 'GET',
      path: '/block/{index}',
      handler: async (request, h) => {
        let block = await this.blockChain.getBlock(request.params.index)
        if (block == null) {
          console.log(`block ${request.params.index} not found`)
          return `{"error": "Block not in the chain", "height": "${request.params.index}"}`
        }
        return block
      }
    });
  }

  /**
  *
  * @param {*} data
  * @param {string} field
  * @param {Array<string>} empty_patterns
  * @return {boolean} is_empty
  */
  _isEmptyData(data, field, empty_patterns = EMPTY_DATA) {
    if (data == null) {
      throw new TypeError('{"error": "No JSON input."}')
    }
    //added recursion to support multiple fields checking
    if (typeof field == 'object') {
      for (var i in field) {
        this._isEmptyData(data, field[i], empty_patterns)
      }
    } else if (typeof field == 'string') {
      if (data[field] == null) {
        throw new TypeError(`{"error": "No ${field} key on JSON input."}`)
      }
      for (var i in empty_patterns) {
        if (data[field] == empty_patterns[i]) {
          throw new TypeError(`{"error": "${field} key is empty."}`)
        }
      }
    } else {
      throw new TypeError(`{"error": "${field} can not be checked if is empty or not}`)
    }
  }

  /**
  * Implement a POST Endpoint to add a new Block, url: "/api/block"
  */
  postNewBlock() {
    this.server.route({
      method: 'POST',
      path: '/block/',
      handler: async (request, h) => {
        try {
          this._isEmptyData(request.payload, 'address')
          this._isEmptyData(request.payload.star, ['dec', 'ra', 'story'])
        } catch (err) {
          return err.message
        }
        let blockAux = new Block.Block(request.payload.body);
        await this.blockChain.addBlock(blockAux)
        return JSON.stringify(blockAux)
      }
    });
  }

  /**
  * Implement a POST endpoint to receive a validation for future submission of a star to the notary.
  */
  postRequestValidation() {
    this.server.route({
      method: 'POST',
      path: '/requestValidation/',
      handler: (request, h) => {
        try {
          this._isEmptyData(request.payload, 'address')
        } catch (err) {
          return err.message
        }
        let address = request.payload.address
        if (this.mempool[address] == null) {
          let new_request = new Request.Request(address)
          this.mempool[address] = new_request.prepareSelfDestruction(this.mempool)
        }
        return this.mempool[address].countTimeWindow()
      }
    })
  }

  postSignRequest() {
    this.server.route({
      method: 'POST',
      path: '/message-signature/validate/',
      handler: (request, h) => {
        try {
          this._isEmptyData(request.payload, ['address', 'signature'])
        } catch (err) {
          return err.message
        }
        let address = request.payload.address
        let signature = request.payload.signature
        console.log(this.mempool)
        if (this.mempool[address] != null) {
          let validation = new Validation.Validation(this.mempool[address], signature)
          this.mempoolValid[address] = validation.prepareSelfDestruction(this.mempoolValid)
          this.mempool[address] = null
        } else if (this.mempoolValid[address] == null) {
          return '{"error":"request validation not found or expired."}'
        }
        return this.mempoolValid[address].countTimeWindow().verifySignature(signature)
      }
    })
  }

  /**
  * Help method to initialized Mock dataset, adds 10 test blocks to the blocks array
  */
  initializeMockData() {
    this.blockChain.getBlockHeight().then((index) => {
      let self = this
      if (index > 0) {
        return
      }
      function theLoop(i) {
        setTimeout(function () {
          let blockTest = new Block.Block('Test Block - ' + (i + 1));
          self.blockChain.addBlock(blockTest).then((result) => {
            console.log(result);
            i++;
            if (i < 10) theLoop(i);
          });
        }, 300);
      };
      theLoop(0)
    })
  }
}

/**
* Exporting the BlockController class
* @param {*} server
* @param {boolean} populate_data
*/
module.exports = (server, populate_data) => { return new BlockController(server, populate_data);}