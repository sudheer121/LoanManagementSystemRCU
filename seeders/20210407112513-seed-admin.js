const giveHash = require("../methods/giveHash"); 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      email: 'admin@admin.com',
      password : giveHash('adminpass'),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
      id : 1
    },{
      email: 'abc@agent.com',
      password : giveHash('agentpass'),
      role: 'agent',
      createdAt: new Date(),
      updatedAt: new Date(),
      id : 2 
    },{
      email: 'abc@customer.com',
      password : giveHash('customerpass'),
      role: 'customer',
      createdAt: new Date(),
      updatedAt: new Date(),
      id : 3 
    },{
      email: 'sudheer@user.com',
      password : giveHash('userpass'),
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
      id : 4 
    }]);

    await queryInterface.bulkInsert('Customers',[{
      id : 1, 
      first_name : "Ramesh",
      last_name : "Suresh",
      city : "Mumbai",
      state : "Maharashtra",
      country : "India", 
      userId : 3, 
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      id : 2, 
      first_name : "Sudheer",
      last_name : "Tripathi",
      userId : 4, 
      city : "Mumbai",
      state : "Maharashtra",
      country : "India", 
      createdAt: new Date(),
      updatedAt: new Date() 
    }])

    await queryInterface.bulkInsert('Agents',[{
      id : 1, 
      first_name : "Ramakant",
      last_name : "Pandit",
      userId : 2,
      salary : "80000",
      cardId : "12345563",
      createdAt: new Date(),
      updatedAt: new Date() 
    }])

    await queryInterface.bulkInsert('Accounts',[{
      id :  1,
      type : "workaccount",
      balance : 30000,
      accountID : "12344321",
      customerId : 1,
      createdAt: new Date(),
      updatedAt: new Date() 
    }])

    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Customers', null, {});
    await queryInterface.bulkDelete('Accounts', null, {});
   
    return queryInterface.bulkDelete('Agents', null, {});
  }
};