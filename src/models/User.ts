import {Sequelize, Model, DataTypes, BuildOptions} from 'sequelize';
import { sequelize } from '../config/database';
export default class User extends Model<User> {
    public id!: number;
    public name!: string;
    public email!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING
	},
	email: {
		type: DataTypes.STRING,
		unique: true
	}
}, {
	sequelize
});