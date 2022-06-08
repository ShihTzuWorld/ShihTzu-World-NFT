const NftMarket = artifacts.require("NftMarket");

contract("NftMarket", accounts => {
const {ethers} = require("ethers");

let _contract = null;
let _nftPrice = ethers.utils.parseEther("0.3").toString();

before(async () => {
    _contract = await NftMarket.deployed();
})

describe("Mint token", () => {
    const tokenURI = "https://test.com";
    before(async () => {
        await _contract.mintToken(tokenURI, _nftPrice, {
            from: accounts[0]
        })
    })

    it("owner of first token should be address [0]", async () => {
        const owner = await _contract.ownerOf(1);
        assert.equal(owner, accounts[0], "Owner of token is not matching address 0");
    })

    it("first token should point to the correct TokenURI", async () => {
        const actualTokenURI = await _contract.tokenURI(1);
        assert.equal(actualTokenURI, tokenURI, "token URI is not correctly set");
    })

    it("Should not be possible to create NFT with used token URI", async () => {
        try {
            await _contract.mintToken(tokenURI, _nftPrice, {
                from: accounts[0]
            })
            
        } catch (error) {
             assert(error, "NFT minted with previously used token URI");
        }

    })

    it("Should have 1 listed item", async () => {
        const listedItemCount = await _contract.listedItemsCount();
        assert.equal(listedItemCount, 1, "Listed items count is not 1");
    })
})

})