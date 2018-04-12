const model = require("../model/users");

module.exports = {

    post: (req, res) => {

        if(req.body == null) {
            res.sendStatus(400);
            return;
        }

        let query = { email: req.body.email };

        model.findOne(query, (err, doc) => {
            if(validateLogin(res, req.body.password, doc)) {
                req.session.user = {
                    id: doc._id,
                    name: doc.name,
                    email: doc.email
                };
                res.sendStatus(200);
            }
        });
    }

};

function validateLogin(res, password, doc) {

    if(!doc) {
        res.json({
            error: true,
            msg: "Email not found"
        });
        return false;
    }

    // if(doc.password != utils.crypto(password)) {
    //     res.json({
    //         error: true,
    //         msg: "Password incorrect"
    //     });
    //     return false;
    // }

    return true;
}