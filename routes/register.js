const express = require("express");
const router = express.Router();
 
const register = require("../controllers/register");
const { checkAdmin } = require("../middlewares/checkAdmin"); 
const { decodeToken } = require("../middlewares/decodeToken");  

router.post("/customer", register.registerCustomer);  
router.post("/agent", decodeToken, checkAdmin, register.registerAgent); 

module.exports = router; 