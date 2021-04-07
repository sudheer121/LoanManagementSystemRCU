'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.addColumn('Accounts', 'customerId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('Loans', 'loanType', {
      type: Sequelize.INTEGER,
      references: {
        model: 'LoanTypes', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('Loans', 'customerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Customers', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('Loans', 'agentId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Agents', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.removeColumn('Accounts', 'customerId');
    await queryInterface.removeColumn('Loans', 'loanType');
    await queryInterface.removeColumn('Loans', 'customerId');
    await queryInterface.removeColumn('Loans', 'agentId');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
