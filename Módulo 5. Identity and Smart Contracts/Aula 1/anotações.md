# Lição 5 - Identity and Smart Contracts

## Aula 1

1. > Ethereum: plataforma pública e programável em um blockchain.
    1. > Ethereum se descreve como uma plataforma descentralizada que executa Contratos Inteligentes, que são códigos que rodam exatamente como foram escritos, sem possibilidade de controle ou fraude.

2. > Ethereum Virtual Machine: (EVM) é capaz de processar algoritmos e dados.
    1. EVM executa programas em uma linguagem conhecida como Solidity, baseada em C++, Python e JavaScript
    2. É apelidado de 'sistema operacional' do Ethereum
    3. Tem algumas implementações em linguagens diferentes, fornecendo assim os meios de se programar Smart Contracts nestas linguagens.
    4. É responsável por executar código, validar transações, gerenciar contas e o estado do blockchain.

3. Códigos em Solidity são também conhecidos como Smart Contracts
    1. Smart Contracts são conjuntos de regras programadas para serem ativadas de acordo com contextos definidos no próprio contrato, interagindo com dados, usuários ou outros contratos.
    2. Solidity tem tipagem estática, suporta herança e módulos de código em bibliotecas.
    3. Smart contracts são autônomos e nunca deixarão de existir no blockchain, exceto se contiverem uma cláusula que assim determine. Essa cláusula é chama de **Kill Switch** e é uma boa prática colocá-lo no contrato.

4. Ehtereum foi desenvolvido para evitar a complexidade de adicionar múltiplas funcionalidades a um blockchain como o bitcoin, tornando progressivamente inviável manter e criar novo código. O protocolo Ethereum cria uma plataforma blockchain onde outros programas podem ser escritos, permitindo a criação de programas em blockchain sem alterar ou adicionar complexidade ao protocolo do blockchain.

5. Estado de um blockchain se refere à forma como as variáveis, taxas, saldos e outras informações são armazenadas na camada de dados do blockchain.

6. Bitcoin armazena todas as informações no blockchain, enquanto o Ethereum separa as informações do estado de uma conta do blockchain (que no bitcoin estão distribuídas nas transações não gastas - UTXO). Aparentemente, o ethereum parece mapear essas informações de estado ao blockchain através de árvores PATRICIA (Practical Algorithm To Retrieve Information on Alphanumeric)

7. Tanto em Bitcoin quanto em Ethereum, não há necessidade de permissão para participar da rede (o blockchain é público).

8. Desenvolvimento do Bitcoin é descentralizado, com decisões tomadas pela comunidade. Em ethereum, há um time que compõem o grupo central de desenvolvimento e eles tomam as decisões.

9. Scripts em Bitcoin são limitados a uma linguagem de Autômatos de Pilha, e em Ethereum são Turing Completas (são mesmo? fiquei em dúvida).

10. > A rede de nós do Ethereum rodando o EVM é denominado World Computer

11. Um Smart Contract é compilado em uma versão Byte, que é "legível" para humanos, e uma versão Assembly, para execução na EVM.

12. Ferramentas para Ethereum:
    1. [Etherscan](https://etherscan.io/) - um site para explorar os blockchains dentro do Ethereum, tanto o principal quanto os de teste.
    2. [MetaMask](https://metamask.io/) - interface da rede Ethereum para interagir em um navegador. O Brave não necessita disso;
    3. [Remix](https://remix.ethereum.org/) - Ferramenta online para desenvolver, testar e lançar Smart Contracts;
    4. [web3.js](https://web3js.readthedocs.io/en/1.0/) - uma biblioteca JavaScript desenvolvida pelo próprio time do Ethereum para conceder acesso à rede Blockchain;
    5. [Infura](https://infura.io/) - interface para dar acesso a livenets
    6. [Ganache](https://truffleframework.com/ganache) - interface para dar acesso a uma blockchain privada. Faz parte de um framework denominado como [Truffle](https://truffleframework.com/);
    7. [Geth](https://geth.ethereum.org/) - permite criar um nó na rede Ethereum localmente. Infura permite se conectar à rede no desenvolvimento de um programa sem ser preciso configurar um nó com o geth.

13. Comunidades Ethereum são importantes e é como a rede progride:
    1. [blog](https://blog.ethereum.org/) e [facebook](https://www.facebook.com/ethereumproject) - novidades;
    2. [github](https://github.com/ethereum) - códigos e projetos atuais em andamento;
    3. [youtube](https://www.youtube.com/user/ethereumproject) - cursos, palestras e explicações;
    4. [reddit](https://www.reddit.com/r/ethereum) e [gitter](https://gitter.im/ethereum/home)  - discussões;
    5. [StackExchange](https://ethereum.stackexchange.com/) e [Ethereum forum](https://forum.ethereum.org/categories/ethereum-js) - suporte, códigos e desenvolvimento.

14. > Dapp é um programa que tem seu código executado em uma rede p2p.
    1. EVM possui suporte a processamento de dados Turing Completo, portanto não há limitações quanto à lógica que pode ser executada no programa.
    2. [DappRadar](https://dappradar.com/) - um site que lista os Dapps e mantém registro de quantidade de contas e volume de mercado associado ao token do Dapp. Ele não se restringe ao Ethereum, mas mostra outras redes, por exemplo EOS e Tron.
    3. [State of the Dapps](https://www.stateofthedapps.com/) -

15. Dapps vs. Apps: Decentralized applications run their code on a p2p network, thus allowing the execution to not be controlled or stopped by external factors. Standard applications can run on the cloud, but there is always the possibility of whoever runs the app to control the availability or even the integrity of the software.

16. Execuções de métodos de um Smart Contract são transações no Blockchain.

17. TODO:Inserir aqui o diagrama de um Dapp Full Stack.

18. Metamask injeta a api web3.js em websites, que passarão a funcionar conectados à rede Ethereum configurada no Metamask. Ele também vai fornecer endereços para realizar transações, caso o site solicite.

19. Get Ether faucets to use on:
    1. Ropsten TestNet: <https://faucet.metamask.io>
    2. Rinkeby TestNet: <https://faucet.rinkeby.io/>

20. Contas podem ser EOA ou CA.
    1. EOA - Externally Owned Account. Usuários podem gerenciar esse tipo de conta, e tem acesso à chave privada.
    2. CA - Contract Account. São controladas por Smart Contracts. CAs podem tranferir valores e criar outros Smart Contracts.
    3. Contas CA podem ser criadas por CA ou por EOAs.

21. Campos de uma conta:
    1. Nonce - número de transações criados por uma conta.
    2. Balanço - total de ether em uma conta, contados em wei (menor unidade). 1 ether = 10^18 wei.
    3. Hash de armazenamento - é o hash da árvore Patrícia.
    4. Hash de código - esse Hash não muda. Só se aplica a CA e é por isso que contratos não são alterados depois de criados.

22. Web3

23. Infura

24. Ganache

25. gas

26. Há 2 tipos de mensagem no Ethereum: Chamada de mensagem, ou Criação de Contrato. ambos alteram o estado do blockchain.

27. Variáveis de uma transação em Ethereum
    1. Nonce: número único associado a cada transação de um endereço, começando do zero.
    2. Gas Price: preço que se vai pagar para mineradores executarem seu contrato
    3. Limite de gas: especifica alguma forma de limite computacional que o minerador deve gastar.
    4. to: destinatário
    5. value: valor
    6. Data,Init: contém informações ao criar e chamar Smart Contracts.

28. cada operação elementar na instrução do Smart Contract soma uma quantidade de gas. Durante a execução, o gas é convertido em ethers, e os mineradores são pagos.

29. En questão de gas, pode-se falar sobre gas price ou gas limit. Pode-se especular sobre o gas price para obter preferência de execução da sua transação. Gas limit pode prevenir que um Smart Contract muito pesado ou com loops infinitos não seja executado indefinidamente, e nem que ocorram problemas de usuários pagando valores altíssimos em situações excepcionais.

30. Informações sobre o Blockchain em <https://ethstats.net/>
    1. best block
    2. uncles (blocos órfãos)
    3. last block time
    4. average block time
    5. average network hashrate
    6. hash difficulty
    7. nodes connecteds to dashboard
    8. gas price (1 gwei)
    9. gas limit 8007818 gas
    10. page latenct
    11. node global map
    12. vários gráficos

31. Smart Contract [myMessage](https://remix.ethereum.org/#optimize=true&version=soljson-v0.4.24+commit.e67f0147.js) publicado na rede [Rinkeby](https://rinkeby.etherscan.io/tx/0xb9d6543b0aafbe91998e8d529039098bf230935aa153687f8b4c630417f9f5fe):
    1. Contrato: 0xb07a8761392e75e84B3131c4F9565ef88c616262

32. A partir do Solidity 0.5.0, é necessário explicitar a localização de todas as variáveis declaradas em funções, estruturas, listas e mapas de tipos. [Fonte](https://ethereum.stackexchange.com/questions/62906/typeerror-data-location-must-be-memory-for-parameter-in-function-but-none-wa)

33. Funções que não alteram o smart contract ou o estado do blockchain são de graça se são executados por um nó local. Isso não significa que eles não consumem gas, a questão é que o gas utilizado não é cobrado. Ainda pode acontecer erros por falta de gas. [Fonte](https://ethereum.stackexchange.com/questions/33562/truffle-constant-functions-run-out-of-gas-how-to-simulate-a-local-node)