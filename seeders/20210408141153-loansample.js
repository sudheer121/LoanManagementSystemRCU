'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Loans',[{
      id : 1,
      customerId : 1,
      agentId : 1,
      loanType : 2,
      principalAmount : 200000,
      durationMonths : 18,
      emi : 11874,
      status : "NEW",
      createdAt: new Date(),
      updatedAt: new Date() 
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Loans', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
