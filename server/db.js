const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    password: '!!!!!INSERT PASSWORD HERE!!!!!!',
    host: 'localhost',
    port: 5432,
    database: 'dbms' 
})


module.exports = pool