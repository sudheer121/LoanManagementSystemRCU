const { testConnection } = require("./methods/methods"); 
const app = require("./app"); 

let retries = 5; 
const func = async() => {
    while(retries) { 
        try { 
            await testConnection(); 
            console.log("Successfully connected");
            break; 
        } catch(err) {
            retries -= 1; 
            console.log(err); 
            console.log(`${retries} retries left`); 
            await new Promise((res) => setTimeout(res,5000)); 
        }
    }
}
func();

const server = app.listen(7000, function () {
    console.log("Server running on post 7000");
});
