const { genSaltSync, hashSync } = require('bcryptjs'); 

const giveHash = (password) => {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
}       

module.exports = giveHash; 