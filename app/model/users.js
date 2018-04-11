const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: { type: String, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
},{
    versionKey: false
});

module.exports = mongoose.model("Users", UserSchema);