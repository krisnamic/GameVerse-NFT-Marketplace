/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv/config')
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  paths: {
    artifacts: './src/artifacts',
  },
  defaultNetwork: "kovan",
  networks: {
    hardhat: {},
    kovan: {
      url: process.env.DEV_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};