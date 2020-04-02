/*  
*   auth Controller
*/

var tmp = require('tmp');
const fs = require('fs');
const fspath = require('path');
const uuidv1 = require('uuid/v1');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

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

    tmp.dir(function _tempDirCreated(err, path, cleanupCallback) {
        if (err) throw err;
        filepath = fspath.resolve(path, req.file.originalname);
        fs.writeFileSync(filepath, req.file.buffer);

        // get entity , page , file_id
        let remotepath = entity + '/' + 'page1' + '/' + req.file.originalname;
        // construct bucket file path


        storage.bucket('orgresource-0').upload(filepath, {
            destination: remotepath,
            gzip: true,
            metadata: {
                //cacheControl: 'public, max-age=31536000',
                cacheControl: 'no-cache'
            }
        }).catch((err) => { console.error(err) });

        // Manual cleanup
        cleanupCallback();
        res.json({});
    });
}
