const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/QmR3WpLZgy92uFvkFGZmgLHAVsUukPArnS3nCpnZMQp6dv","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmeZh7zfnJG3gHYYiDBxXyQkqKr3j1R4Fjke8dQHFd8vDY","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmPSJMk2Svowbo23fZXH4Nh9QszTY1z7iMMdjHADAw8nZt","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmPN8UAwC6bZbsNTm4kc9tQAsfnaj2JSPAjucUWFtZH99n","500000000000000000", {value: "25000000000000000",from: accounts[0]})