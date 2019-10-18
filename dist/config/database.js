"use strict";Object.defineProperty(exports, "__esModule", {value: true});// lib/config/database.ts
var _sequelize = require('sequelize');

 const database = new (0, _sequelize.Sequelize)({
    database: "repo_db",
    dialect: "postgres",
    host: 'localhost',
    username: "postgres",
    password: "12345"
}); exports.database = database;