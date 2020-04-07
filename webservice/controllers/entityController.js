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

// GET /api/web/entity/page:id
exports.pageContent = function (req, res) {
    let entity = req.session.entity;
    let id = req.params.id;
    console.log(id);
    var dao = new orgDao(entity);
    dao.pageContent(id, (val) => {
        console.log(val);
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