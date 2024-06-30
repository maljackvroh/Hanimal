'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('users', 'name', 'username');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('users', 'username', 'name');
  }
};