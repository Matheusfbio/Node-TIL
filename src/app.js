// const express = require("express");
import express from "express";

const app = express();
//indicar para o express ler body com json
app.use(express.json());
const users = [
  { userId: 1, name: "John", email: "joaopep@gow.bn" },
  { userId: 2, name: "Matheus", email: "gogogmig@arakfe.gm" },
  { userId: 3, name: "Lucy", email: "gujuf@ho.jm" },
  { userId: 4, name: "Natan", email: "enoja@talsiice.be" },
];

function findUserById(userId) {
  return users.filter((user) => user.userId == userId);
}

function findIdUser(userId) {
  return users.findIndex((user) => user.userId == userId);
}

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.get("/users/:userId", (req, res) => {
  res.json(findUserById(req.params.userId));
});

app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json(users);
});

app.delete("/users/:userId", (req, res) => {
  let index = findIdUser(req.params.userId);
  users.splice(index, 1);
  res.send(`User id ${req.params.userId} was deleted successfully`);
});

export default app;
