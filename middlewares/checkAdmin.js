const unauthorized = {
    success:0,
    message:"You are not authorized for this route"
}

const checkAdmin = async (req,res,next) => {
    if(req.decode.role !== "admin") {
        return res.json(unauthorized);
    }
    next(); 
}

module.exports =  {
    checkAdmin
}