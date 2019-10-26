import { Sequelize } from "sequelize-typescript";
import User from '../models/User';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize({
    database: process.env.DB_DATABASE,
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});
sequelize.addModels([User]);