const { closeConnection,testConnection } = require("../methods/methods")
const request = require("supertest");
const app = require("../app");


beforeAll(async () => {
    await testConnection()
});

afterAll(async()=>{
    await closeConnection(); 
})

let agentToken;
describe("Test agent",  () => {
    test("Respond with agent token", done => {
        request(app)
        .post("/login")
        .send({
            email : "ramakant@agent.com",
            password : "agentpass"
        })
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.body.token).toBeTruthy();
          agentToken = response.body.token 
          done(); 
        });
    });
})

describe ("Test agent profile", ()=> { 
    test("View agent profile", done =>{ 
        request(app)
        .get("/profile")
        .set({
            token : agentToken 
        })
        .then(response => {
          expect(response.statusCode).toBe(200); 
        });
        done(); 
    })
});
