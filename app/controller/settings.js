const model = require("../model/settings");

module.exports = {

    get: function(req, res) {
        model.findOne(function(err, doc) {
            if(err) res.send(err);
            else res.json(doc);
        });
    },

    post: function(req, res) {
        model.create(req.body, function(err, doc) {
            if(err) res.send(err);
            else res.json(doc);
        });

    },

    put: function(req, res) {
        let query = { _id: req.body._id };
        let options = { upsert: false };
        model.update(query, req.body, options, function(err, affected) {
            if(err) res.send(err);
            else res.sendStatus(200);
        });
    }

};