const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/QmaSMZUMsm8Mww2EAr2bxW4Z95gP6khrTtA97rfvJAvbyW","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmafsDZ54NicEx5aVUBLaKD8dVUjHtJG36VhEkhSDFniMX","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmcPpKiRdNcYact8yFMYHQTQcbQcsqkwZaHPvbhKmbmMc2","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmV8P3DcXp7EyzbqBHtdtjV439arY8vgemJphVKQw2gfUW","500000000000000000", {value: "25000000000000000",from: accounts[0]})