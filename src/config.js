const CONTRACT_NAME = "nft-mint-frontend.adarsh_tripathi.near";

function getConfig() {
      return {
        networkId: "mainnet",
        nodeUrl: "https://rpc.mainnet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://wallet.near.org",
        helperUrl: "https://helper.mainnet.near.org",
        explorerUrl: "https://explorer.mainnet.near.org",
      };
   
}
console.log('Hello World!')
module.exports = getConfig;
