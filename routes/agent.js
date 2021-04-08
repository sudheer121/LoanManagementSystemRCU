const express = require("express");
const router = express.Router();
const agent = require("../controllers/agent");

const { decodeToken } = require("../middlewares/decodeToken") 
const { checkAgent } = require("../middlewares/checkAgent") 

router.post("/addLoan", decodeToken, checkAgent, agent.addLoan)
module.exports = router; 