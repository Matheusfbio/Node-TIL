// const express = require("express");
import express from "express";
const app = express();
app.use(express.json())

const users = [
  { id: "8356fe7c-caad-5791-8965-66fdbcfacf55", name: "John", email: "joaopep@gow.bn" },
  { id: "a21e4473-6acf-51d9-87b1-7e529634c984", name: "Matheus", email: "gogogmig@arakfe.gm" },
  { id: "6d032974-3bac-537c-bb8c-0be68a4299d8", name: "Lucy", email: "gujuf@ho.jm" },
  { id: "a1e15059-8655-5a64-8366-3f35f9c7fcb4", name: "Natan", email: "enoja@talsiice.be" },
];

function GetUSerById(id) {
  return users.filter(user => user.id == id)
}

function GetIndexUser(id) {
  return users.findIndex(user => user.id == id)
}

app.get("/", (req, res) => res.send("Welcome!"));

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.get("/users/:id", (req, res) => {
  res.json(GetUSerById(req.params.id))
})

app.post("/users", (req, res) => {
  users.push(req.body)
  res.status(201).send("created user")
})
app.delete("/users/:id", (req, res) => {
  const index = GetIndexUser(req.params.id)
  users.splice(index, 1)
  res.send(`User ${req.params.id} deleted successfully`)
})

export default app;
