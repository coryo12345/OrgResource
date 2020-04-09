/*  
*   auth Controller
*/

const { orgDao } = require('../models/orgDao');
const sql = require('../models/orgDaoSql');

/** 
 *  GET /api/web/entity/info
 * 
 *  Must be logged in
 */
exports.info = function (req, res) {
    let entity = req.session.entity;
    var dao = new orgDao();
    dao.genericQueryExecute(sql.entityInfo, [entity], (val) => {
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
 *  GET /api/web/entity/modules
 * 
 *  Must be logged in
 */
exports.modules = function (req, res) {
    let entity = req.session.entity;
    var dao = new orgDao();
    dao.genericQueryExecute(sql.entityModules, [entity], (val) => {
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

/**
 *  GET /api/web/entity/pages
 * 
 *  Must be logged in
 */
exports.pages = function (req, res) {
    let entity = req.session.entity;
    var dao = new orgDao();
    dao.genericQueryExecute(sql.entityPages, [entity], (val) => {
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
    var dao = new orgDao();
    dao.genericQueryExecute(sql.pageContent, [entity, id], (val) => {
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