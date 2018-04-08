const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// var SettingsSchema = new Schema({
//     name: { type: String, required: true },
//     description: { type: String },
//     value: { type: String, required: true }
// },{
//     versionKey: false
// });

var SettingsSchema = new Schema({
    url: {
        title: String,
        value: String
    }
},{
    versionKey: false
});

module.exports = mongoose.model("Settings", SettingsSchema);