const loanservice = require("../services/loan");

const addLoan = async (req,res) => {
    const agentId = req.decode.agentId;
    const {
        customerId, principalAmount, durationMonths, emi 
    } = req.body; 

    const loan = await loanservice.addLoan({
        agentId, customerId, principalAmount, durationMonths, emi 
    })

    return res.status(200).json(loan); 
}

module.exports = {
    addLoan 
}