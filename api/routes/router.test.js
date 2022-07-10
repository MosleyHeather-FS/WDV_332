// const express = require("express");
// const request = require("supertest");
// const router = require('./userRouter')
// const app = express();

// app.use(express.json());

// app.use(router);

// //jest
// describe("Test User Routes", () => {
//   test("POST - Signup", async () => {
//     await request(app)
//       .post("/signup")
//       .send({ firstName: "Heather", lastName: "Mosley" })
//       .set('Accept', 'application/json')
//       .expect(200)
//       .then((res) => {
//         expect(res.body.message).toEqual("Signup - POST");
//         expect(res.body.metadata.hostname).toEqual("127.0.0.1");
//         expect(res.body.metadata.firstName).toEqual("Heather");
//         expect(res.body.metadata.lastName).toEqual("Mosley");
//       });
//   });

//   test("GET - Profile", async () => {
//     await request(app)
//       .get("/profile")
//       .expect(200)
//       .then((res) => {
//         expect(res.body.message).toEqual("Profile - GET");
//         expect(res.body.metadata.hostname).toEqual("127.0.0.1");
//         expect(res.body.metadata.method).toEqual("GET");
//         //expect(res.body.metadata.email).toEqual("");
//       });
//   });
// });
