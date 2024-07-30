// first we will install -> the npm install -g truffle
var Adoption = artifacts.require("Adoption");

module.exports = function(deployer){
    deployer.deploy(Adoption);
}