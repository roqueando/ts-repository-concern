// lib/config/database.ts
import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
export const database = new Sequelize({
    database: process.env.DB_DATABASE,
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});