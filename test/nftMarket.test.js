const { assert } = require("console");

const NftMarket = artifact.require("NftMarket");

contract("NftMarket", accounts => {

let _contract = null;

before(async () => {
    _contract = await NftMarket.deployed();
    console.log(accounts);
})

describe("Mint token", () => {

    it("should resolve into true value", () => {
        assert(true, "Value not true");
    })
})

})