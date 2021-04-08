const loanservice = require("../services/loan")

const addLoanType = async(req,res) => {
    const {
        type,
        interestRate
    } = req.body; 

    const loantype = await loanservice.addLoanType({
        type,
        interestRate
    })

    return res.status(200).json(loantype); 
    
} 

const updateLoanStatus = async(req,res) => {
    const { 
        loanId, 
        status 
    } = req.body ;

    const loanstatus = await loanservice.updateLoanStatus({
        loanId, 
        status 
    })

    return res.status(200).json(loanstatus); 
}

module.exports = {
    addLoanType,
    updateLoanStatus 
}