const { ethers } = require('hardhat');

async function main() {
  const CeloNFTFactory = await ethers.getContractFactory("CeloNFT");

  const celoNftContract = await CeloNFTFactory.deploy();
  await celoNftContract.deployed();

  console.log("Celo NFT deployed to", celoNftContract.address);

  const NFTMarketplaceFactory = await ethers.getContractFactory("NFTMarketplace");

  const nftMarketplaceContract = await NFTMarketplaceFactory.deploy();
  console.log("NFT Marketplace deployed to", nftMarketplaceContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});