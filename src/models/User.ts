import {Model, Table, Column, CreatedAt, UpdatedAt, PrimaryKey} from 'sequelize-typescript';
import "reflect-metadata";

@Table({
	timestamps: true
})
export default class User extends Model<User> {
    @PrimaryKey
    @Column 
    public id!: number;
    @Column public name!: string;
    @Column public email!: string;

    @CreatedAt 
    @Column public readonly createdAt!: Date;

    @UpdatedAt
    @Column public readonly updatedAt!: Date;
}

