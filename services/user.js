const db = require("../models");
const addUser = async(data) => {
    const { email, password, role } = data; 
    const res = await db.User.create({
        email, password, role
    })
    return res; 
} 

const findRole = async(userId) => {
    const res = await db.User.findOne({
        attributes:['role'],
        where : {
            id : userId 
        }
    })
    return res.role; 
}

const findCustomerId = async(userId) => {
    const res = await db.Customer.findOne({
        attributes : ['id'],
        where : {
            userId : userId 
        }
    })
}

const findAgentId = async(userId) => {
    const res = await db.Agent.findOne({
        attributes : ['id'],
        where : {
            userId : userId 
        }
    })
    return res; 
}

const findByEmail = async(email) => {
    try { 
        const res = await db.User.findOne({ 
            where : {
                email 
            } 
        });
        return res;
    } catch(err) {
        return Promise.reject(err)
    }
}
 

module.exports = {
    addUser,
    findRole,
    findCustomerId,
    findAgentId,
    findByEmail 
}