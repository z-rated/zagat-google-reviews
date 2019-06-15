const { Pool, Client } = require('pg');


const pool = new Pool({
  user: 'chenxin',
  host: 'localhost',
  database: 'zagatdb',
  port: 5432
})

const getById = (id, callback) => {
  var text = `select * from reviews inner join users on (reviews.restaurant_id = ${id} and reviews.user_id = users.id)`;
  pool.query(text, (err, result) => {
    if(err) {
      callback(err);
    } 
    else {
      var reviews =
        result.rows.map(res => {
          var obj = {};
          var dateArr = res['date_posted'].split(' ');
          obj['date_posted'] = dateArr[1] + ' ' + dateArr[2] + ', ' + dateArr[3];
          obj['picture'] = res['profile_pic'];
          obj['rating'] = Math.round(res['rating']);
          obj['rest_id'] = res['restaurant_id'];
          obj['review_id'] = res['review_id'];
          obj['reviewer'] = res['username'];
          obj['text_review'] = res['text_review'];
        return obj;
        });
        callback(null, reviews);
    }
  })
}

const insertById = (id, data, callback) => {
  console.log(data);
  var text = 
  `insert into reviews (date_posted, rating, text_review, restaurant_id, user_id) values ('${data['date_posted']}', ${data['rating']}, '${data['text_review']}', ${id}, ${data['user_id']})`;
  console.log(text);
  pool.query(text, (err, result) => {
    if(err) {
      callback(err);
    }
  })
}
module.exports = {
  getById,
  insertById
}



