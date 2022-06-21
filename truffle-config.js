module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
     host: "172.18.160.1",
     port: 7545,
     network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "0.8.10",
    }
  },
};
