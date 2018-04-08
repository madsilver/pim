const mongoose = require("mongoose");
const dbUri = "mongodb://localhost:27019/pim";
mongoose.Promise = global.Promise;
mongoose.connect(dbUri);


process.on("SIGNIT", function() {
    mongoose.connection.close(function() {
        process.exit();
    });
});