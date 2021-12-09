const hardhat = require("hardhat")
require('dotenv/config')

async function main(){
    const GameVerse = await hardhat.ethers.getContractFactory("gameVerse")
    const gameVerse = await GameVerse.deploy(process.env.REACT_APP_NFT_CONTRACT_ADDRESS);

    await gameVerse.deployed()

    console.log("SKKM Service deployed to:", gameVerse.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });