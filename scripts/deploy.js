// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const Market = await hre.ethers.getContractFactory("Market");
  const market = await Market.deploy();

  await market.deployed();

  console.log(
    `Market deployed to ${market.address}`
  );
  // var marketAddress = "0x64257A73087e33ae8E92A3dE19dB6CFc9c1Bc53E"
  // const Media = await hre.ethers.getContractFactory("Media");
  // const media = await Media.deploy(marketAddress);

  // await media.deployed();

  // console.log(
  //   `Medai deployed to ${media.address}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
