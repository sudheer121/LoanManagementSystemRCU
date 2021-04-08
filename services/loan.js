const db = require("../models");

const addLoan = async (data) => {
    const {
        agentId, customerId, principalAmount, durationMonths, emi 
    } = data; 

    const res = await db.Loan.create({
        agentId, customerId, principalAmount, durationMonths, emi,
        status : "NEW"
    })

    return res; 
}   

const viewCustomerLoans = async (customerId) => {
    const res = await db.Loan.findAll({
        where : {
            customerId : customerId 
        }
    });

    return res; 
}

const viewAllLoans = async () => {
    const res = await db.Loan.findAll();
    return res; 
}

const updateLoanStatus = async (data) => {
    const {
        loanId, status
    } = data; 
    const loan = await db.Loan.findOne({
        where : {
            id : loanId 
        } 
    })
    const loanupdated = await loan.update({
        status 
    })
    return loanupdated; 
}

const addLoanType = async(data) => { 
    const { 
        type, 
        interestRate
    } = data; 

    const loantype = await db.LoanType.create({
        type,
        interestRate
    })

    return loantype; 
}

const viewLoanTypes = async() => {
    const loantypes = await db.LoanType.findAll(); 
    return loantypes; 
}

module.exports = {
    addLoan,
    viewCustomerLoans,
    viewAllLoans,
    updateLoanStatus,
    addLoanType,
    viewLoanTypes 
}