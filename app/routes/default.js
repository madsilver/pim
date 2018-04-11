let express = require("express");
let router = express.Router();

router.get('*', (req, res) => {
    let logged = true;

    res.render('index', { 'logged': logged });
    //res.sendFile(process.cwd()+'/public/bkp_index.html');
});

module.exports = router;