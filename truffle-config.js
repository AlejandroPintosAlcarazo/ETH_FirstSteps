module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Cualquier red
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};

