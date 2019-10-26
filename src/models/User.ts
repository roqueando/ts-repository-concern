import {Table, Model, Column, CreatedAt, UpdatedAt} from 'sequelize-typescript';

// @Table
export default class User extends Model<User> {
    @Column public id!: number;
    @Column public name!: string;
    @Column public email!: string;

    @CreatedAt
    @Column public readonly createdAt!: Date;
    
    @UpdatedAt
    @Column public readonly updatedAt!: Date;
}