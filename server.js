const express = require("express");
const app = express();
const path = require("path");
const api = require("./api/api");
const morgan = require("morgan");
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

// For static HTML and CSS files
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

//route - api
app.use("/api/notes", api);

//rpute - homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

//route - note page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});

app.listen(port, host, function() {
  console.log("Server started.......");
});