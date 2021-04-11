const { closeConnection,testConnection } = require("../methods/methods")
const request = require("supertest");
const app = require("../app");


beforeAll(async () => {
    await testConnection()
});

afterAll(async()=>{
    await closeConnection(); 
})

const { findByEmail } = require("../services/user"); 

describe("Check env",()=>{
    test("env is test",()=>{
        expect(process.env.NODE_ENV).toEqual("test"); 
    })
})

describe("Check email existence",()=>{
    it("Should check email", async()=>{
        const user = await findByEmail("admin@admin.com");
        expect(user.email).toEqual("admin@admin.com"); 
    })
    it("Should not exist, email", async()=>{
        const user = await findByEmail("doesnotexist@g.com");
        expect(user).toEqual(null); 
    })
})


