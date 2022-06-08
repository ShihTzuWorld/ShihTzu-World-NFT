const { assert } = require("console");

const NftMarket = artifacts.require("NftMarket");

contract("NftMarket", accounts => {

let _contract = null;

before(async () => {
    _contract = await NftMarket.deployed();
})

describe("Mint token", () => {
    const tokenURI = "https://test.com";
    before(async () => {
        await _contract.mintToken(tokenURI, {
            from: accounts[0]
        })
    })

    it("owner of first token should be address [0]", async () => {
        const owner = await _contract.ownerOf(1);
        assert(owner == "0x06b28d358D5faC215127AEABf33fc149930d295c", "Owner of token is not matching address 0");
    })
})

})