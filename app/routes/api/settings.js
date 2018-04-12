const express = require("express");
const router = express.Router();
const settingsCtrl = require('../../controller/settings');

router.route("/")
    .get(settingsCtrl.get)
    .post(settingsCtrl.post)
    .put(settingsCtrl.put);

module.exports = router;