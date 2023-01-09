const express = require("express");
const app = express();
const url = require("url");
const cors = require("cors");
var a = [];
app.use(cors({ origin: true }));
app.get("/post",(req, res) => {
  var q = url.parse(req.url, true).query;
  if (q.title || q.sid) {
    a.push(q);
  }
  if (a.length > 16) {
    a.shift();
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end("");
});
app.get("/get",(req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(a));
});
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('Routes are /post and /get');
});
app.listen(4444, () => {
  console.log("Listening on https://127.0.0.1:4444")  
});