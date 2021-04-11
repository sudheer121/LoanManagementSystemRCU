const { closeConnection,testConnection } = require("../methods/methods")
const request = require("supertest");
const app = require("../app");

beforeAll(async () => {
    await testConnection()
});

afterAll(async()=>{
    await closeConnection(); 
})


describe("Loan types",()=>{
    test("Respond with more that 2 loantypes", done => {
        request(app)
        .get("/loan/loantypes")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.body.length).toBeGreaterThanOrEqual(3);
          done();
        });
    });
    
})