const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var SettingsSchema = new Schema({
    urlApi: { type: String, required: true },
    company: { type: String }
},{
    versionKey: false
});

module.exports = mongoose.model("Settings", SettingsSchema);