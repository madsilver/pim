const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./app/config/config");
const path = require("path");
const fs = require("fs");
const session = require("client-sessions");
require('./app/helpers/db');

// session
app.use(session(config.session));

// templates
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "app", "views"));

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// cors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
    next();
});

// static route
app.use(express.static(__dirname + "/public"));

// api routes
fs.readdirSync("./app/routes/api").forEach((r) => {
    var route = r.split(".")[0];
    app.use("/api/" + route, require("./app/routes/api/" + route));
});

// default routes
app.use("/", require("./app/routes/default"));

app.listen(config.port, () => {
    console.log(`server running at port ${config.port}`)
});