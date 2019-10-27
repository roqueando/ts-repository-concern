'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.createTable('Users', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            name: {
              type: Sequelize.STRING
            },
            email: {
              type: Sequelize.STRING,
              unique: true
            },
            createdAt: {
              type: Sequelize.DATE
            },
            updatedAt: {
              type: Sequelize.DATE
            }
        }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.dropTable('Users'),
    ]);
  }
};
