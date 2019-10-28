import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

export const sequelize = new Sequelize({
    database: process.env.DB_DATABASE,
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    models: [path.resolve('src', 'models')],
});

