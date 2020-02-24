/*  
*   auth Controller
*/

const { orgDao } = require('../models/orgDao');

/** 
 *  GET /api/web/entity/info
 * 
 *  Must be logged in
 */
exports.info = function (req, res) {
    if (req.session.loggedIn !== true || req.session.entity === null) {
        res.status(403);
        res.send();
        return;
    }
    let entity = req.session.entity;
    var dao = new orgDao(entity);
    dao.entityInfo((val) => {
        try {
            var result = val.rows[0];
        }
        catch (err) {
            res.status(500);
            res.send();
            return;
        }
        res.json(result);
    });
}

/**
 *  GET /api/web/entity/pages
 * 
 *  Must be logged in
 */
exports.pages = function (req, res) {
    if (req.session.loggedIn !== true || req.session.entity === null) {
        res.status(403);
        res.send();
        return;
    }
    let entity = req.session.entity;
    var dao = new orgDao(entity);
    dao.entityPages((val) => {
        try {
            var result = val.rows;
        }
        catch (err) {
            res.status(500);
            res.send();
            return;
        }
        res.json(result);
    });
}
