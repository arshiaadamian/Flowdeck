const express = require("express");

const app = express();
const PORT = 3000;

app.get("/health", function (req, res) {
  res.json({ status: "ok" });
});

app.listen(PORT, function () {
  console.log("Backend running on http://localhost:" + PORT);
});
