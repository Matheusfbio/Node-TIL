import { request } from "express";
import app from "./app.js"

describe('App test', () => {
  test('App router', async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200)
    expect(response.text).toBe("Welcome!")
  })
})