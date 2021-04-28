require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain erosion inner kiwi olympic skull'; 
let testAccounts = [
"0x61272e381c1f34839aa78605781004b60427f7e19d2fbcadeeffef8f0032d055",
"0xd89ba6eac9f8f7ef761fb05065039a5e7b0aa2ae29fc8ced86d85f9ad69cef43",
"0x4b89c6fe279799849f9f4dd95c3a804f0a9c14514a4bd70bcfd5cb448a7ac2a1",
"0xa236cf0dd8e815561abb2d475d34e4935d037faf29a5f490e7196dd5420183a7",
"0x24d51522b49745d4e80724699cc7f8ebb886ba26bb30d7275902708c7fdd9922",
"0xf143023639a9709cfd6713c68cfa7a87c257b8f81a401979075a450cadf1a767",
"0xbd61f3a51ce1658c2afd0f735fa05d86214e67aa31113577786674905d36dc6b",
"0x9f43670451d5763e7ee33e1ae1327126fe2aae379da4dc7b9b2f2c4bcf338c88",
"0x4c2bd38fd09e74607f822c0f9744d60807506066e10cfc6dcd5d3abd40b36688",
"0x673e8c04eccfbf7c5f7695eaad6de8bdda026773025d94e8d4a7e48bd551f1d0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
