// MVC Pattern
// Model ===> Database Data Store Pattern
// View ===> User View
// Controller ===> All Logic

// Rest Api ===> Representational State Transfer
// Graphql Api

import express from "express";
import bodyParser from "body-parser";
import todoRoutes from "./src/routes/todo.js";
import userRoutes from "./src/routes/user.js";
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes Middleware
app.use("/api", todoRoutes);
app.use("/api/user", userRoutes);

app.listen(3000);
console.log("Server Started");
