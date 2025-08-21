// console.log("Hello World");
// const number1 = 10;
// const number2 = 20;
// console.log(number1 + number2);
// console.log(number1 + number2);

// import export
const http = require("http");
const fs = require("fs");
const path = require("path");
const filePath = path.join(process.cwd(), "text.txt");
// import http from ''
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World");
        res.end();
    } else if (req.url === "/form") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
        <form action='/submit' method="POST">
        <input name="name" placeholder="Enter Your Name" />
        <button type="submit">Submit</button>
        </form>
        `);
        res.end();
    } else if (req.url === "/submit") {
        let data = "";
        req.on("data", (chunks) => {
            data += chunks;
        });
        req.on("end", () => {
            fs.writeFile(filePath, data, (err) => {
                if (err) {
                    res.write("Server Crash");
                    res.end();
                } else {
                    res.write("Data Recieved Successfully");
                    res.end();
                }
            });
        });
    } else {
        res.write("404 Not Found");
        res.end();
    }
});

// Server Listen Port
server.listen(3000);
console.log("Server has been started");