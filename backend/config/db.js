const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dhoni@4076',
    database: 'bannerDB'
});
// const db = mysql.createConnection({
//     host: process.env.MYSQLHOST,    // Use the Railway host details
//     user: process.env.MYSQLUSER,    // Use the Railway username
//     password: process.env.MYSQLPASSWORD, // Use the Railway password
//     database: process.env.MYSQLDATABASE, // Use the Railway database name
//     port: process.env.MYSQLPORT,    // Use the Railway port
//   });

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

module.exports = db;
