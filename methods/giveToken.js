const { sign } = require("jsonwebtoken"); 

const giveToken = (data) => {
    const {
        role, userId, customerId, agentId 
    } = data; 
    console.log(role); 
    
    if(role === "customer") { 
        return sign({
            role, userId, customerId
        }, process.env.JWT_SALT,{
            expiresIn: "1d"
        }); 
    }
    if(role === "agent") {
        return sign({
            role, userId, agentId
        }, process.env.JWT_SALT,{
            expiresIn: "1d"
        });
    }
    if(role === "admin") {
        return sign({
            role, userId 
        }, process.env.JWT_SALT,{
            expiresIn: "1d"
        });
    }

    throw new Error('Role not passed or wrong role value');

}

module.exports = giveToken; 