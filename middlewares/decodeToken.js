const jwt = require("jsonwebtoken");
const jwtsalt = process.env.JWT_SALT;

const invalidToken = {
    success:0,
    message:"Token expired/invalid"
}
const notLoggedIn = {
    success:0,
    message:"Please login first"
}

module.exports = {
    decodeToken: function(req,res,next){
        //token = req.headers.bearer; 
        var token; 
        try{
            token = req.headers.token; 
        } catch(error) {
            return res.json(notLoggedIn); 
        }
        
        if(token){
            jwt.verify(token, jwtsalt, (err,decoded) => {
                if(err){
                    return res.json(invalidToken); 
                } else {
                    req.decode = decoded; // attaching decoded info in req 
                    next(); 
                }
            });
        } else {
            return res.json(notLoggedIn); 
        }
    }
};