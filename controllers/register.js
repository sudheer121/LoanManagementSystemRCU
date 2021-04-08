const userservice = require("../services/user");
const customerservice = require("../services/customer");
const agentservice = require("../services/agent");
const {sign} = require("jsonwebtoken");

const emailExists = {
    success : 0,
    message : "Email Already Exists"
}

const registerCustomer = async (req,res) => {
    const {
        email, password, first_name, last_name, 
        aadhar_card_no, gender, city, state, country, average_salary
    } = req.body; 
    
    const exist = await userservice.findByEmail(email); 
    if(exist) {
        return res.status(200).json(emailExists)
    }

    const user = await userservice.addUser({
        email, password, role : "customer"
    });
     
    const customer = await customerservice.addCustomer({
        userId: user.id,
        first_name, last_name, 
        aadhar_card_no, gender, city, state, country, average_salary
    })
    
    return res.status(200).json({
        success : 1,
        message : "Registered Customer",
        token : sign({
            role : "customer",
            userId : user.id,
            customerId : customer.id 
        },process.env.JWT_SALT,{
            expiresIn: "1d"
        })
    }); 
}

const registerAgent = async(req,res) => {
    const {
        email, password, first_name, last_name, 
        salary, cardId
    } = req.body 

    const exist = await userservice.findByEmail(email); 
    if(exist) {
        return res.status(200).json(emailExists)
    }

    const user = await userservice.addUser({
        email, password, role : "agent"
    });

    const agent = await agentservice.addAgent({
        usrId : user.id, 
        first_name, last_name, salary, cardId
    })

    return res.status(200).json({
        success : 1,
        message : "Registered Agent",
        token : sign({
            role : "agent",
            userId : user.id,
            agentId : agent.id 
        },process.env.JWT_SALT,{
            expiresIn: "1d"
        })
    }); 
}

module.exports = {
    registerAgent,
    registerCustomer 
}