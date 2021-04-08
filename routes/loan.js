const express = require("express");
const router = express.Router(); 

const { decodeToken } = require("../middlewares/decodeToken"); 
const { checkAgent } = require("../middlewares/checkAgent")

const loan = require("../controllers/loan");
const agent = require("../controllers/agent");

router.get("/view",decodeToken,loan.viewLoans); 
router.post("/add",decodeToken,checkAgent,agent.addLoan);
router.get("/loanTypes",loan.viewLoanTypes); 

module.exports = router; 