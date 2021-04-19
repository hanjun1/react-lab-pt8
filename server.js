const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const postRouter = require("./routes/api/posts");
const blogRouter = require("./routes/api/blogs");

require("dotenv").config();
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/post", postRouter);
app.use("/api/blog", blogRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
