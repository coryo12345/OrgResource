/*  
*   auth Controller
*/

const { orgDao } = require('../models/orgDao');
const sql = require('../models/orgDaoSql');

/** 
 *  POST /api/web/auth/login
 *  body: {Object}
 *  {entity, username, password}
 * 
 *  if failed return {loggedIn: false}
 */
exports.login = function (req, res) {
    let entity = req.body.entity;
    let username = req.body.username;
    let password = req.body.password;
    var dao = new orgDao();
    dao.genericQueryExecute(sql.authenticate, [entity, username, password], (val) => {
        if (val.rowCount > 0) {
            req.session.entity = entity;
            req.session.loggedIn = true;
            res.json({ loggedIn: true, entity: entity });
        }
        else {
            res.json({ loggedIn: false });
        }
    });
}

/** 
 *  GET /api/web/auth/login
 *  
 *  returns { Object }
 */
exports.isLoggedIn = function (req, res) {
    if (req.session.loggedIn === true && req.session.entity !== null) {
        res.json({ loggedIn: true, entity: req.session.entity });
    }
    else {
        res.json({ loggedIn: false });
    }
}

/**
 *  GET /api/web/auth/logout
 * 
 *  returns none
 */
exports.logout = function (req, res) {
    req.session.loggedIn = false;
    req.session.entity = null;
    res.status(200);
    res.send();
}