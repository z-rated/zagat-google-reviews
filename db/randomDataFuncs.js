const fakeData = require('./fakeData.js');

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
  const reviewRow = {
    name: pickRandomData(fakeData.names),
    picture: pickRandomData(fakeData.pictures),
    date: pickRandomData(fakeData.dates),
    rating: starRating(),
    review: pickRandomData(fakeData.reviews),
    restid: oneToHundred(i) + 1,
  };
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

module.exports = reviews;
