const express = require("express");
const app = express();
const url = require("url");
var a = [];
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
  res.send('Routes are /post and /get');
});
app.listen(4444, () => {
  console.log("Listening on http://localhost:4444")  
});