/*  
*   DAO for org DB
*/
const { Pool } = require('pg');

class orgDao {
    constructor() {
        this.dao = new Pool();
        this.dao.on('error', (err, client) => { console.error('Unexpected error on idle client', err) });
        this.schema = process.env.PGSCHEMA;
    }

    /**
     * genericQueryExecute
     * function for generic sql calls to org database
     * @param query string of query to execute
     * @param params array of params that fit in query
     * @param callback the callback function to handle responses
     * @returns none -> on success will send results object to callback
     */
    genericQueryExecute(query, params, callback) {
        this.dao.query(query, params, (err, res) => {
            if (err) throw err;
            callback(res);
        });
    }
}

exports.orgDao = orgDao;