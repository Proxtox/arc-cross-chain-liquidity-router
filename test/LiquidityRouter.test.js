const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LiquidityRouter", function () {
  let router;
  let owner, user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const Router = await ethers.getContractFactory("LiquidityRouter");
    router = await Router.deploy();
    await router.deployed();
  });

  it("Should route liquidity", async function () {
    await router.connect(user).routeLiquidity(1000, "Base");
    // Event check would be added in full test
  });

  it("Should return optimal route", async function () {
    const route = await router.getOptimalRoute(10000);
    expect(route).to.be.a("string");
  });
});