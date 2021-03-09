'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cards', [
      {
        name: 'Card 1',
        columnId: 1,
        boardId: 1,
      },
      {
        name: 'Card 2',
        columnId: 1,
        boardId: 1,
      },
      {
        name: 'Card 3',
        columnId: 2,
        boardId: 1,
      },
      {
        name: 'Card 4',
        columnId: 3,
        boardId: 1,
      },
      {
        name: 'Card 5',
        columnId: 3,
        boardId: 1,
      },
      {
        name: 'Card 6',
        columnId: 3,
        boardId: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cards', null, {});
  }
};
