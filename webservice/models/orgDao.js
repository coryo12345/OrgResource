/*  
*   DAO for org DB
*/
const { Pool } = require('pg');
const sql = require('./orgDaoSql');

class orgDao {
    constructor(entity) {
        this.entity = entity;
        this.dao = new Pool();
        this.dao.on('error', (err, client) => { console.error('Unexpected error on idle client', err) });
        this.schema = process.env.PGSCHEMA;
    }

    authenticate(username, password, callback) {
        this.dao.query(sql.authenticate, [this.entity, username, password], (err, res) => {
            if (err) throw err;
            console.log(res);
            if (res.rowCount > 0){
                console.log(true);
                callback(true);
            }
            else{
                console.log(false);
                callback(false);
            }
        });
    }
}

exports.orgDao = orgDao;