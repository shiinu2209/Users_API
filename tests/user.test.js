const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");
require("dotenv").config();

beforeAll(async () => {
  await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("User API", () => {
  let userId;

  test("should create a user", async () => {
    const response = await request(app).post("/worko/user").send({
      email: "test@test.com",
      name: "Test User",
      age: 30,
      city: "Test City",
      zipCode: "12345",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    userId = response.body.id;
  });

  test("should get list of users", async () => {
    const response = await request(app).get("/worko/user");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("should get user details", async () => {
    const response = await request(app).get(`/worko/user/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", userId);
  });

  test("should update user", async () => {
    const response = await request(app).put(`/worko/user/${userId}`).send({
      email: "updated@test.com",
      name: "Updated User",
      age: 35,
      city: "Updated City",
      zipCode: "54321",
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("email", "updated@test.com");
  });

  test("should delete user", async () => {
    const response = await request(app).delete(`/worko/user/${userId}`);
    expect(response.status).toBe(200);
  });
});
