const fakeData = require('./fakeData.js');
const db = require('./mysqldb');

const pickRandomData = (targetData) => {
  const range = targetData.length;
  const randomNum = Math.floor(Math.random() * range);
  return targetData[randomNum];
};

const randomRestaurantId = i => i % 100;

const starRating = () => {
  const num = Math.random() * 5;
  const stars = num.toFixed(1);

  return stars;
};

const createReviewRow = (i) => {
  const reviewRow = [
    pickRandomData(fakeData.names),
    pickRandomData(fakeData.pictures),
    pickRandomData(fakeData.dates),
    starRating(),
    pickRandomData(fakeData.reviews),
    randomRestaurantId(i) + 1,
  ];
  return reviewRow;
};

const reviewsGenerator = () => {
  const reviews = [];

  for (let i = 0; i < 500; i += 1) {
    reviews.push(createReviewRow(i));
  }
  return reviews;
};

const reviews = reviewsGenerator();

const seedDB = () => {
  db.connection.query(`INSERT INTO reviews (reviewer, picture, date_posted, rating, text_review, rest_id)
  VALUES ?`, [reviews], (err) => {
    if (err) {
      throw err;
    } else {
      console.log('Sucess!');
    }
  });
};

seedDB();
