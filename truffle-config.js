// Install and configure lite-server and using the DApp.[npm install lite-server --save-dev]
// open the folder where we create the project -> cmd open and write [npm run dev]

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",  // Localhost (default: none)
      port: 7545,         // Standard Ganache port
      network_id: "*",    // Match any network id
    },
    develop: {
      host: "127.0.0.1",
      port: 8545,         // Port for Truffle Develop (if used)
      network_id: "*",    // Match any network id
    }
  },
  mocha: {
    // Configure your mocha options here

  },
  compilers: {
    solc: {
      version: "0.8.9",  // Specify the compiler version that matches your contracts
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  }
};



// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // for more about customizing your Truffle configuration!
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*" // Match any network id
//     },
//     develop: {
//       port: 8545
//     }
//   }
// };

// module.exports = {
//   // Other configurations...

//   compilers: {
//     solc: {
//       version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
//       settings: {          // See the solidity docs for advice about optimization and evmVersion
//         optimizer: {
//           enabled: false,
//           runs: 200
//         },
//         evmVersion: "byzantium"
//       }
//     }
//   }
// };

// module.exports = {
//   networks: {
//     networks: {
//           development: {
//             host: "127.0.0.1",
//             port: 7545,
//             network_id: "*" // Match any network id
//           },
//           develop: {
//             port: 8545
//           }
//         }
//   },
//   mocha: {
//     // Configure your mocha options here
//   },
//   compilers: {
//     solc: {
//       version: "0.8.9",  // Specify the compiler version that matches your contracts
//       settings: {
//         optimizer: {
//           enabled: false,
//           runs: 200
//         },
//         evmVersion: "byzantium"
//       }
//     }
//   }
// };


