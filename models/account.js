'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.belongsTo(models.Customer)
      // define association here
    }
  };
  Account.init({
    type: DataTypes.STRING,
    balance: DataTypes.STRING,
    accountID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};