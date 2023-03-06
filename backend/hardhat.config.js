require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"});
const KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    fantomTestnet :{
      url: `https://rpc.public.zkevm-test.net`,
      chainId: 1402,
      accounts: [KEY],
      
    },
    
  },
};