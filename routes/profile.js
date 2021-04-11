const express = require("express");
const router = express.Router();

const login = require("../controllers/login");
const register = require("../controllers/register");
const profile = require("../controllers/profile");

const { checkAdmin } = require("../middlewares/checkAdmin"); 
const { decodeToken } = require("../middlewares/decodeToken");  

router.post("/login",login);
router.post("/register/customer", register.registerCustomer);  
router.post("/register/agent", decodeToken, checkAdmin, register.registerAgent); 
router.get("/profile",decodeToken, profile.viewProfile); 

module.exports = router; 