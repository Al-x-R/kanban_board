'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Column, {
        foreignKey: 'columnId',
      })
      this.belongsTo(models.Board, {
        foreignKey: 'boardId'
      })
    }
  };
  Card.init({
    name: DataTypes.STRING,
    columnId: DataTypes.INTEGER,
    boardId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    comment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};