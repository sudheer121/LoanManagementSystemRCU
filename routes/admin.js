const express = require("express");
const router = express.Router();

const { decodeToken } = require("../middlewares/decodeToken"); 
const admin = require("../controllers/admin");
const { checkAdmin } = require("../middlewares/checkAdmin");

router.post("/addLoanType",decodeToken,checkAdmin, admin.addLoanType); 
router.post("/updateLoanStatus",decodeToken,checkAdmin, admin.updateLoanStatus); 

module.exports = router; 