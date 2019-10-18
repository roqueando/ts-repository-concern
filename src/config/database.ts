// lib/config/database.ts
import { Sequelize } from "sequelize";

export const database = new Sequelize({
    database: "repo_db",
    dialect: "postgres",
    host: 'localhost',
    username: "postgres",
    password: "12345"
});