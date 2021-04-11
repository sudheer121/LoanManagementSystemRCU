const db = require("../models");
const addCustomer = async(data) => {
    const {  
        userId,first_name,last_name, aadhar_card_no, gender, city, state, country, average_salary
    } = data; 

    const res = db.Customer.create({
        userId,first_name,last_name, aadhar_card_no, gender, city, state, country, average_salary
    })

    return res; 
}

const addAccount = async(data) => {
    const { 
        type, accountID, customerId, balance 
    } = data 

    const res = db.Account.create({
        type, accountID, customerId, balance 
    })

    return res; 
}

const addBalance = async(data) => {
    const {
        accountID, balance
    } = data; 
    
    if(accountID) { 
        let acc = await db.account.findOne({
            where : {
                accountID 
            }
        })
        acc.balance += balance; 
        await acc.save(); 
        return acc; 
    }
}


const viewCustomers = async() => {
    const res = db.Customer.findAll({
        include : {
            model : db.Account 
        }
    })
    return res 
}

module.exports = {
    addCustomer,
    addBalance,
    addAccount,
    viewCustomers 
}