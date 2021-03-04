'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoardActivities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      })
      this.belongsTo(models.Board, {
        foreignKey: 'boardId'
      })
      this.belongsTo(models.Column, {
        foreignKey: 'columnId',
      })
      this.belongsTo(models.Card, {
        foreignKey: 'cardId'
      })
    }
  };
  BoardActivities.init({
    userId: DataTypes.INTEGER,
    boardId: DataTypes.INTEGER,
    columnId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER,
    action: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BoardActivities',
  });
  return BoardActivities;
};