"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// lib/server.ts

var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
const PORT = process.env.PORT || 8080;

_app2.default.listen(PORT, () => {
    console.log("[SERVER ONLINE] listening:" + PORT);
});