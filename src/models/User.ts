import {Sequelize, DataTypes, Model, BuildOptions} from 'sequelize';

export default class User extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
