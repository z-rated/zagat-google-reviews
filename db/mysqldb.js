const mysql = require('mysql');
// const reviews = require('./randomDataFuncs');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'GoogleReviews',
});

connection.connect();

module.exports = connection;
