const mongoose = require("mongoose");
const config = require("../config/config");

mongoose.Promise = global.Promise;
mongoose.connect(config.dbUri);


process.on("SIGNIT", function() {
    mongoose.connection.close(function() {
        process.exit();
    });
});