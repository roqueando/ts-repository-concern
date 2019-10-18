"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _BaseRepository = require('./BaseRepository'); var _BaseRepository2 = _interopRequireDefault(_BaseRepository);

 class UserRepository extends _BaseRepository2.default {
    constructor(model) {
        super(model);
        this.model = model;
    }
} exports.default = UserRepository;