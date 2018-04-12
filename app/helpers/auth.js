module.exports = function(req, res, next) {

    if(req.session && req.session.user) {
        next();
    }
    else {
        res.sendStatus(401); // Unauthorized
    }
};