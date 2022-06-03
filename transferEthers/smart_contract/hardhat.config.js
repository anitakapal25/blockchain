require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/6D5qj3LeuI07Cfe6ZmH8Cxkla-D6O2NE',
      accounts: ['3a874499da1d8035cf0238317571226e36b1af14fd1a3024e38e2ca2f2bbe228'],
    },
  },
};
