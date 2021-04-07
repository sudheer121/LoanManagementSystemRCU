'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoanType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LoanType.hasMany(models.Loan,{
        onDelete : 'SET NULL' ,
        onUpdate : 'CASCADE'
      })
      // define association here
    }
  };
  LoanType.init({
    type: DataTypes.STRING,
    interestRate: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'LoanType',
  });
  return LoanType;
};