const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const routes = require("./routes/routes");
app.use("/memes", routes);


module.exports = app;
