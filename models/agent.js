'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Agent.belongsTo(models.User); 
      // define association here
    }
  };
  Agent.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    salary: DataTypes.STRING,
    cardId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agent',
  });
  return Agent;
};