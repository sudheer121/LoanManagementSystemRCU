const db = require("../models");
const addAgent = async(data) => {
    const {  
        userId,first_name,last_name, salary, cardId
    } = data; 

    const res = db.Customer.create({
        userId,first_name,last_name, salary, cardId
    })
    return res; 
}

module.exports = {
    addAgent
}