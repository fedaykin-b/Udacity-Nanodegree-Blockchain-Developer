pragma solidity >=0.4.24;
// https://ethereum.stackexchange.com/questions/62906/typeerror-data-location-must-be-memory-for-parameter-in-function-but-none-wa
contract Message {
    string myMessage;

    function setMessage(string memory x) public {
        myMessage = x;
    }

    function getMessage() public view returns (string memory) {
        return myMessage;
    }
}