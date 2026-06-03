const hre = require("hardhat");

async function main() {
  const LiquidityRouter = await hre.ethers.getContractFactory("LiquidityRouter");
  const router = await LiquidityRouter.deploy();
  await router.deployed();
  console.log("LiquidityRouter deployed to:", router.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});