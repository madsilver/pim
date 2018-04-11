const express = require("express");
const router = express.Router();
const auth = require("../helpers/auth");
const loginCtrl = require('../controller/login');

router.route('*')
    .get((req, res) => {
        let logged = req.session.user;

        res.render('index', { 'logged': logged });
        //res.sendFile(process.cwd()+'/public/bkp_index.html');
    })
    .post(loginCtrl.post);

module.exports = router;