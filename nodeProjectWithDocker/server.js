const express = require("express");

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello from the get route /");
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
