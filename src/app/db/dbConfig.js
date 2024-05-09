const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'magi3654',
    password: 'suga9608*',
    database: 'cafetec'
});

module.exports = conection;