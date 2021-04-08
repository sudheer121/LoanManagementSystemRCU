'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LoanTypes', [{
      id : 1, 
      type: 'Home Loan',
      interestRate : 7.2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id : 2, 
      type: 'Car Loan',
      interestRate : 8.5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id : 3, 
      type : 'Study Loan',
      interestRate : 6.5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id : 4, 
      type : 'Personal Loan',
      interestRate : 11.5,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LoanTypes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
