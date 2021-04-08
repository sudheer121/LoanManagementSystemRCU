require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser'); 
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

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

async function testConnection() {
    try {
      await db.sequelize.authenticate();
      console.log("All models were synchronized successfully.");
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

async function closeConnection() {
  try {
    await db.sequelize.close();
  } catch(err) {
    console.error(err); 
  }
}

const register = require("./routes/register");
const login = require("./routes/login");
const agent = require("./routes/agent");
const loan = require("./routes/loan");
const admin = require("./routes/admin");
app.use("/register",register); 
app.use("/login",login); 
app.use("/agent", agent); 
app.use("/admin", admin); 
app.use("/loan", loan ); // for all 


module.exports = app 
