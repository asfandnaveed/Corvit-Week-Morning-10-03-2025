const mysql = require('mysql2');


const pool  = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"corvit_morning_10_03_2025",
    connectionLimit:20
});


module.exports = pool;