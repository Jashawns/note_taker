const express = require("express");
const app = express();
const path = require("path");
const api = require("./api/api");
const morgan = require("morgan");

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

app.listen("3001", () => {
  console.log(`Server started on port 3001`);
});
