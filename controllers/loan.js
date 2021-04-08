const loanservice = require("../services/loan");

const viewLoans = async (req,res) => {
    const {role} = req.decode.role; 
    let loans; 
    if(role === "customer") { 
        loans = await loanservice.viewCustomerLoans(req.decode.customerId); 
    } else {
        loans = await loanservice.viewAllLoans();
    }
    return res.status(200).json(loans); 
}  

const viewLoanTypes = async(req,res) => {
    const loantypes = await loanservice.viewLoanTypes(); 
    return res.status(200).json(loantypes);
}

module.exports = {
     viewLoans,
     viewLoanTypes
}; 