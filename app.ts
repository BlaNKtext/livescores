import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const playString: Array<{ title?: string; sid?: string }> = [];
app.get("/", (req, res) => {
  res.send('Whoops! Are you sure you know what you\'re doing?');
});
app.get("/get", (req, res) => {
  res.json(playString);
});
app.post("/post", (req, res) => {
  const { title, sid } = req.body;
  if (title || sid) {
    playString.push({ title, sid });
  }
  if (playString.length > 16) {
    playString.shift();
  }
  res.send("");
});
app.all("*", (req, res) => {
  res.status(404).send("This route doesn't exist, silly!");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});