let express = require("express");
let router = express.Router();
const settingsCtrl = require('../../controller/settings');

router.route("/api/settings")
    .get(settingsCtrl.get)
    .post(settingsCtrl.post)
    .put(settingsCtrl.put);

module.exports = router;