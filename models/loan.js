'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loan.belongsTo(models.Customer,{
        foreignKey : 'customerId',
        targetKey  : 'id'
      });
      Loan.belongsTo(models.Agent, {
        foreignKey : 'agentId',
        targetKey : 'id' 
      });
      Loan.belongsTo(models.LoanType, {
        foreignKey : 'loanType',
        targetKey : 'id'
      }); 
      // define association here
    }
  };
  Loan.init({
    customerId : DataTypes.INTEGER,
    agentId : DataTypes.INTEGER, 
    loanType : DataTypes.INTEGER, 
    principalAmount: DataTypes.BIGINT,
    durationMonths: DataTypes.INTEGER,
    emi: DataTypes.DOUBLE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loan',
  });
  return Loan;
};