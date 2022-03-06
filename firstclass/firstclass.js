

// const http = require("http")
// const fs = require("fs");
// const path = require("path")

// const filePath = path.join(__dirname, "data.text")

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         console.log(req.url);
//         res.write("hello Motrolla")
//         res.end()
//     } else if (req.url === "/form") {
//         res.setHeader("Content-Type", "text/html");
//         res.write("<form action='/submit' method='POST'><input name='data'/><input name='data2'/> <button>submit</button> </form>")
//         res.end()
//     } else if (req.url === "/submit") {
//         let data = "";
//         req.on("data", (chunk) => {
//             data += chunk;
//         });
//         req.on("end", () => {
//             fs.readFile(filePath, (err , oldData) => {
//                 const newData = oldData + "/n" + data ;
//                 fs.writeFile(filePath, newData, () => {
//                     console.log("saved");
//                 })
//             })
//         });
//         res.write("Data Received")
//         res.end();
//     }
// })

// server.listen(3000);



 