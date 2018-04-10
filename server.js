let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let config = require("./app/config/config");

require('./app/helpers/db');

let settings = require('./app/controller/settings');

// body-parser
app.use(bodyParser.json({ limit: "10mb", type: "application/json" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.text());

// cors
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
    next();
});

// static route
app.use(express.static(__dirname + "/public"));

app.route("/api/settings")
    .get(settings.get)
    .post(settings.post)
    .put(settings.put);

app.use("*", require("./app/routes/default"));

app.listen(config.port, () => {
    console.log(`server running at port ${config.port}`)
})