/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   solidity: "0.8.11",
   networks: {
         volta: {
            url: "https://volta-rpc.energyweb.org",
            accounts: ["10ab6c26d0c5acbe627ef7b1d16236de7e7715f08eaa008f27dcacfb49607238"],
            chainId: 73799,
          },
        },
         gas: 210000000,
         gasPrice: 800000000000,
   };
