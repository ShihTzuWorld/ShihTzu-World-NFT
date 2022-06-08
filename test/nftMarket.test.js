const NftMarket = artifacts.require("NftMarket");
const {ethers} = require("ethers");
const { list } = require("postcss");

contract("NftMarket", accounts => {


let _contract = null;
let _nftPrice = ethers.utils.parseEther("0.3").toString();
let _listingPrice = ethers.utils.parseEther("0.025").toString();

before(async () => {
    _contract = await NftMarket.deployed();
})

describe("Mint token", () => {
    const tokenURI = "https://test.com";
    before(async () => {
        await _contract.mintToken(tokenURI, _nftPrice, {
            from: accounts[0],
            value: _listingPrice
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

    it("Should have created NFT item", async () => {
        const nftItem = await _contract.getNftItem(1);
        assert.equal(nftItem.tokenId, 1, "Token ID is not 1");
        assert.equal(nftItem.price, _nftPrice, "NFT price is not correct");
        assert.equal(nftItem.creator, accounts[0], "Creator is not account 0");
        assert.equal(nftItem.isListed, true, "Token is not listed");
    })
})

    describe("Buy NFT", () => {
        before(async () => {
            await _contract.buyNft(1, {
                from: accounts[1],
                value: _nftPrice
            })
        })

        it("Should unlist the item", async () => {
            const listedItem = await _contract.getNftItem(1)
            assert.equal(listedItem.isListed, false, "Item is still listed");
        })

        it("Should decrease listed items count", async () => {
            const listedItemsCount = await _contract.listedItemsCount()
            assert.equal(listedItemsCount.toNumber(), 0, "Count had not been decreased");
        })

        it("Should change the owner", async () => {
            const currentOwner = await _contract.ownerOf(1)
            assert.equal(currentOwner, accounts[1], "Item is still listed");
        })
    })

})