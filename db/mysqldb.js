const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'GoogleReviews',
});

connection.connect();

const get = (id, cb) => {
  connection.query(`SELECT * FROM reviews WHERE rest_id = ${id}`, (err, data) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, data);
  });
};

module.exports = {
  connection,
  get,
};
