'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CardActivities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Card, {
        foreignKey: 'cardId'
      })
    }
  };
  CardActivities.init({
    cardId: DataTypes.INTEGER,
    user: DataTypes.STRING,
    action: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CardActivities',
  });
  return CardActivities;
};