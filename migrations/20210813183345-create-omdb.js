'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OMDBs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      log_id: {
        type: Sequelize.INTEGER
      },
      req_url: {
        type: Sequelize.STRING
      },
      api_key: {
        type: Sequelize.STRING
      },
      keyword: {
        type: Sequelize.STRING
      },
      page: {
        type: Sequelize.STRING
      },
      movie_id: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OMDBs');
  }
};