const { testConnection } = require("./methods/methods"); 

const app = require("./app"); 
const server = app.listen(process.env.PORT || 7000, function () {
    console.log("Server running on post 7000");
    testConnection()
});
