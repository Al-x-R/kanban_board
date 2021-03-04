'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Column extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Board, {
        foreignKey: 'boardId'
      })
      this.hasMany(models.Card, {
        foreignKey: 'columnId'
      })
      this.hasMany(models.CardActivities, {
        foreignKey: 'columnId'
      })
    }
  };
  Column.init({
    name: DataTypes.STRING,
    boardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Column',
  });
  return Column;
};