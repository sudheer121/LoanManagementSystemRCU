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

module.exports = {
    addCustomer 
}