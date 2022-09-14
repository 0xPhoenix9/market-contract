require("@nomicfoundation/hardhat-toolbox");

const INFURA_KEY = "70ba2227e3664cd0b9f67ffcb0a0d164"
const PRIVATEKEY = "bc999b5aaac8c2f989d18f500eda85a6548c98f43ff16bfa2ceb0bae87aef08d"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      accounts: [PRIVATEKEY],
      live: true,
      saveDeployments: true,
    }
  },
  etherscan: {
    apiKey: "TT325TQXP1DII7XVG7HKF5TCJ9EE4IEYMB",
  },
  solidity: "0.6.8",
};
