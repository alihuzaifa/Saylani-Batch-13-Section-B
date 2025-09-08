import express from "express";
import bodyParser from "body-parser";
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extends: false }));
// app.use("/", (req, res, next) => {
//   req.data = "12345678910";
//   next();
// });

// methods
// get post put delete patch
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/form", (req, res) => {
  res.send(`
   <form action='/submit' method="POST">
        <input name="name" placeholder="Enter Your Name" />
        <button type="submit">Submit</button>
        </form> 
    `);
});

app.post("/submit", (req, res) => {
  console.log(req.body.name);
  res.send("Data Submitted Successfully");
});

app.listen(3000);
