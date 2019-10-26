import { Sequelize } from 'sequelize';
import { sequelize } from '../config/database';
import fs from 'fs';
import path from 'path';

let db = {
    sequelize,
    Sequelize
};

fs.readdirSync(__dirname)
    .filter(
        file => file.indexOf('.') !== 0 && file !== path.basename(__filename) && file.slice(-3) === '.ts',
    )
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    })

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


console.log(db);
export default db;