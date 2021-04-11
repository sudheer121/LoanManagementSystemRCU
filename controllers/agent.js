const loanservice = require("../services/loan");
const customerservice = require("../services/customer");
const giveUID = require("../methods/giveUID"); 

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

const addAccount = async(req,res) => {
    const agentId = req.decode.agentId; 

    const { 
        customerId, balance, type 
    } = req.body; 

    let accountID = giveUID(); 

    const account = await customerservice.addAccount({
        type, accountID, customerId, balance 
    })

    return res.status(200).json(account); 
}

const viewCustomers = async(req,res) => {
    const customers = await customerservice.viewCustomers();
    return res.status(200).json(customers); 
}

module.exports = {
    addLoan,
    addAccount,
    viewCustomers 
}