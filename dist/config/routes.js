"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});// lib/config/routes.ts


var _Resource = require('./Resource'); var _Resource2 = _interopRequireDefault(_Resource);
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

 class Routes {constructor() { Routes.prototype.__init.call(this); }

     __init() {this.userController = new (0, _UserController2.default)()}
    

     routes(app) {
        this.userResource = new (0, _Resource2.default)('users', this.userController, app).handle();    
    }
} exports.Routes = Routes;