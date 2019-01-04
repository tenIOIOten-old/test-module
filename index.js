// index.jsの例

var myModule = require("./lib/myModule");
// (実際には ./lib/myModule/index.js を読む)

// それをそのまま、このモジュールからexport
module.exports = myModule;
