// const express = require("express");
import express from "express";
const app = express();

const users = [
  { name: "John", email: "joaopep@gow.bn" },
  { name: "Matheus", email: "gogogmig@arakfe.gm" },
  { name: "Lucy", email: "gujuf@ho.jm" },
  { name: "Natan", email: "enoja@talsiice.be" },
];

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

export default app;
