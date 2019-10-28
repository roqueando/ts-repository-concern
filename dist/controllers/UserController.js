"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _BaseController = require('./BaseController'); var _BaseController2 = _interopRequireDefault(_BaseController);
var _UserRepository = require('../repositories/UserRepository'); var _UserRepository2 = _interopRequireDefault(_UserRepository);

 class UserController extends _BaseController2.default {
    constructor() {
        super(_UserRepository2.default);
        this.repository = _UserRepository2.default;
    }
} exports.default = UserController;