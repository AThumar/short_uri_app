const express = require("express");
const url = require("url");
const fs = require("fs");
const app = express();
const port = 3000;
app.get("/readfile", (req, res) => {
  //   var data = fs.readFileSync("data.json");
  //   res.send(data);
  fs.readFile("data.json", (err, data) => {
    if (err) throw err;
    else res.send(data);
  });
});
app.get("/", (req, res) => {
  console.log(req.query.url);
  var parsedUrl = url.parse(req.query.url);
  console.log("domain", parsedUrl.hostname);
  console.log("host", parsedUrl.host);
  console.log("path", parsedUrl.path);
  console.log("port", parsedUrl.port);
  console.log("protocol", parsedUrl.protocol);
  console.log("parsedUrl", parsedUrl);

  res.send("Hello World!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
