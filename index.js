require('dotenv').config();
const express = require('express');
//const sequelize = require('sequelize'); 
let app = express();
const db = require("./models")
 
app.use((req, res, next) => { 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

async function testConnection() {
    try {
      await db.sequelize.authenticate();
      console.log("All models were synchronized successfully.");
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}


app.listen(process.env.PORT || 7000, function () {
    console.log("Server running on post 7000");
    testConnection();
});
    