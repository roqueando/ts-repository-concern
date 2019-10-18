"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});// lib/app.ts

var _express = require('express'); var express = _interopRequireWildcard(_express);
var _bodyparser = require('body-parser'); var bodyParser = _interopRequireWildcard(_bodyparser);
var _routes = require('./config/routes');


class App {
 
  __init() {this.routePrv = new (0, _routes.Routes)()}
 
 constructor() {;App.prototype.__init.call(this);
   this.app = express();
   this.config();
   this.routePrv.routes(this.app);
 }

  config() {
   this.app.use(bodyParser.json());
   this.app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
 }
}

exports. default = new App().app;