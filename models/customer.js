'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.belongsTo(models.User); 
      Customer.hasOne(models.Account,{
        onDelete : 'SET NULL' ,
        onUpdate : 'CASCADE'
      });
      // define association here
    }
  };
  Customer.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    aadhar_card_no: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    gender: DataTypes.STRING,
    average_salary: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};