/*  
*   auth Controller
*/

const { orgDao } = require('../models/orgDao');

/** 
 *  GET /api/web/file/upload
 * 
 *  Must be logged in
 */
exports.upload = function (req, res) {
    if (req.session.loggedIn !== true || req.session.entity === null) {
        res.status(403);
        res.send();
        return;
    }
    let entity = req.session.entity;
    console.log("file: ", req.file);
    // get file from req
    // get entity , page , name
    // construct file path
    // send request w/ file to storage_controller
    res.json({});
}
