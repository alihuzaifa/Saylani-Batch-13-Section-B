// MVC Pattern
// Model ===> Database Data Store Pattern
// View ===> User View
// Controller ===> All Logic

// Rest Api ===> Representational State Transfer
// Graphql Api

import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import todoRoutes from "./src/routes/todo.js";
import userRoutes from "./src/routes/user.js";
import dbConnection from "./src/lib/db.js";
const app = express();

dotenv.config({});

// Middleware
app.use(bodyParser.json());

// Routes Middleware
app.use("/api", todoRoutes);
app.use("/api/user", userRoutes);

dbConnection().then(() => {
  console.log("Server Started");
  app.listen(3000);
});
