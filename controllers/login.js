const userservice = require("../services/user");
const { compareSync } = require('bcryptjs');
const {sign} = require("jsonwebtoken");
const giveToken = require("../methods/giveToken");

const login = async(req,res) =>{
    const {
        email, password
    } = req.body;
    
    const user = await userservice.findByEmail(email); 
    if(!user.email){ 
        return res.status(404).json({
            success : 0,
            message : "Email does not exist"
        })
    }
    console.log(password , user.password ); 
    if(!compareSync(password,user.password)){ 
        return res.status(401).json({
            success : 0,
            message : "Wrong password"
        })
    }

    const role = user.role; 

    if(role === "customer") { 
        const customer = await userservice.findCustomerId(user.id); 
        return res.status(200).json({
            token : giveToken({
                role, userId : user.id, customerId : customer.id 
            })
        }); 
    }
    else if(role === "agent") { 
        const agent = await userservice.findAgentId(user.id); 
        return res.status(200).json({
            token : giveToken({
                role, userId : user.id, agentId : agent.id 
            })
        }); 
    } else {
        return res.status(200).json({
            token : giveToken({
                role, userId : user.id 
            }) 
        }); 
    }    
}

module.exports = login 