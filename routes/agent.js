const express = require("express");
const router = express.Router();
const agent = require("../controllers/agent");

const { decodeToken } = require("../middlewares/decodeToken") 
const { checkAgent } = require("../middlewares/checkAgent") 

router.post("/addLoan", decodeToken, checkAgent, agent.addLoan)
router.post("/addAccount",decodeToken, checkAgent, agent.addAccount) 
router.post("/viewCustomers",decodeToken, checkAgent, agent.addAccount) 
module.exports = router; 