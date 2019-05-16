const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'GoogleReviews',
});

connection.connect();

module.exports = connection;
