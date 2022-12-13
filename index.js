const express = require("express");

const app = express();
const host = "localhost";
const port = 3000;

app.get("/", (req, res) => {
  res.status(400).send("done");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
