const model = require("../model/settings");

module.exports = {

    get: (req, res) => {
        model.findOne((err, doc) => {
            if(err) res.send(err);
            else res.json(doc);
        });
    },

    post: (req, res) => {
        model.create(req.body, (err, doc) => {
            if(err) res.send(err);
            else res.json(doc);
        });

    },

    put: (req, res) => {
        let query = { _id: req.body._id };
        let options = { upsert: false };
        model.update(query, req.body, options, (err, affected) => {
            if(err) res.send(err);
            else res.sendStatus(200);
        });
    }

};