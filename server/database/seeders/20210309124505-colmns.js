'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Columns', [
      {
        name: 'Column1',
        boardId: 1,
      },
      {
        name: 'Column2',
        boardId: 1,
      },
      {
        name: 'Column3',
        boardId: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Columns', null, {});
  }
};
