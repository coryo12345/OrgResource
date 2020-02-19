/*  
*   DAO for org DB
*/
const { Pool } = require('pg');
const sql = require('./orgDaoSql');

export default class orgDao {
    constructor(entity) {
        this.entity = entity;
        this.dao = new Pool();
        this.dao.on('error', (err, client) => { console.error('Unexpected error on idle client', err) });
    }

    authenticate(username, password) {
        this.dao.query(sql.authenticate, [this.entity, username, password], (err, res) => {
            if (err) throw err;
            if (res.rowCount > 0)
                return true;
            else
                return false;
        });
    }
}