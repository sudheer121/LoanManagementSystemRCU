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
      Loan.belongsTo(models.User);
      Loan.belongsTo(models.Agent);
      Loan.belongsTo(models.LoanType); 
      // define association here
    }
  };
  Loan.init({
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