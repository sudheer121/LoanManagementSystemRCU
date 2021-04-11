const userservice = require("../services/user");


const viewProfile = async(req,res) => {
    const role = req.decode.role; 
    const userId = req.decode.userId; 

    if(role === "customer") { 
        const customer = await userservice.findCustomerId(userId);
        return res.status(200).json({
            customer 
        })
    }
    
    if(role === "agent") { 
        const agent = await userservice.findAgentId(userId);
        return res.status(200).json({
            agent 
        })
    }

    if(role === "admin") { 
        return res.status(200).json({
            admin : "Admin Profile"
        })
    }

    res.status(500).json({
        err : "Internal Server Error"
    })
}

module.exports = {
    viewProfile
}; 