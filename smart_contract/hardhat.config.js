require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Vtz482reyCnbAugVUs4iCqJrNs1cFGCP',
      accounts: ['3a20acc5827690150b1912aca5390ed20da572ac751c5c4ef63ee3ce7cb91ef1'],
    },
  },
};