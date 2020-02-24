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
            if (res.rowCount > 0){
                callback(true);
            }
            else{
                callback(false);
            }
        });
    }

    entityInfo(callback) {
        this.dao.query(sql.entityInfo, [this.entity], (err, res) => {
            if(err) throw err;
            callback(res);
        });
    }
}

exports.orgDao = orgDao;