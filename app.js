require('dotenv').config();
const express = require('express');
let app = express();
 
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
