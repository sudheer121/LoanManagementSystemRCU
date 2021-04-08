const unauthorized = {
    success:0,
    message:"You are not authorized for this route"
}

const checkAgent = async (req,res,next) => {
    if(req.decode.role !== "agent") {
        return res.json(unauthorized);
    }
    next();
}

module.exports = {
    checkAgent
} 