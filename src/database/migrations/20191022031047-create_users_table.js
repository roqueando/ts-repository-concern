'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.createTable('Users', {
            name: {
              type: Sequelize.STRING
            },
            email: {
              type: Sequelize.STRING,
              unique: true
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
