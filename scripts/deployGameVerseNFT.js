const hardhat = require('hardhat')

async function main() {
    const GameVerseNFT = await hardhat.ethers.getContractFactory("GameVerseNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const gameVerseNFT = await GameVerseNFT.deploy()
  
    await gameVerseNFT.deployed()
  
    console.log("Contract deployed to address:", gameVerseNFT.address)
}
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })