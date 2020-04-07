exports.validSession = function (req, res, next) {
    if (req.session.loggedIn !== true || req.session.entity === null) {
        res.status(403);
        res.send();
    }
    else {
        next();
    }
}