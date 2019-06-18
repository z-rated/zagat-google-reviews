const { Pool, Client } = require('pg');
faker = require('faker');

const pool = new Pool({
  user: 'chenxin',
  host: 'localhost',
  database: 'testdb',
  port: 5432
})

async function insertToDatabase(number) {
  const start = new Date();
  for(let i = 1; i <= number; i++) {
    await insertRestaurant();
    for(let j = 1; j <= 5; j++) {
      if(i <= Math.floor(number/5)) {
        await insertUser();
      }
      var date_posted = faker.date.past();
      var rating = faker.finance.amount(0, 5, 1);
      var text_review = faker.lorem.sentence();
      var restaurant_id = i;
      var user_id = 1+(((i - 1) * 5 + j - 1) % number);
      await insertReview(date_posted, rating, text_review, restaurant_id, user_id);
    }
    if(i === number) {
      const end = new Date();
      console.log(`It took ${(end - start)/60000}mins to generate ${number} primary items`);
    }
  }
}

var insertReview = (date_posted, rating, text_review, restaurant_id, user_id) => {
  return pool.query(`insert into reviews (date_posted, rating, text_review, restaurant_id, user_id) values ('${date_posted}', ${rating}, $$${text_review}$$, ${restaurant_id}, ${user_id})`)
  .catch(err => console.log('REVIEW ERROR: ', err));
}

var insertRestaurant = () => {
  var text = faker.name.firstName() + ' ' + faker.name.lastName() + `'s`;
  return pool.query(`insert into restaurants (restaurant_name) values ($$${text}$$)`)
  .catch(err => console.log('RESTAURANT ERROR: ', text, err));
}

var insertUser = () => {
  return pool.query(`insert into users (username, profile_pic) values ($$${faker.name.firstName() + ' ' + faker.name.lastName()}$$, '${faker.image.avatar()}')`)
  .catch(err => console.log('USER ERROR: ', err));
}

insertToDatabase(10000000);