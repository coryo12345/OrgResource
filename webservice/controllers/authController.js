/*  
*   auth Controller
*/

const { orgDao } = require('../models/orgDao');

/** 
 *  POST /api/web/auth/login
 *  body: {Object}
 *  {entity, username, password}
 * 
 *  if failed return {loggedin: false}
 */
exports.login = function (req, res) {
    let entity = req.body.entity;
    let username = req.body.username;
    let password = req.body.password;
    dao = new orgDao(entity);
    if (dao.authenticate(username, password)) {
        req.session.entity = entity;
        res.json({ loggedin: true, entity: entity });
    }
    else {
        res.json({ loggedin: false });
    }
}