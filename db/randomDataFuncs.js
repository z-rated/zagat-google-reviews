const fakeData = require('./fakeData.js');

const pickRandomData = (targetData) => {
  const range = targetData.length;
  const randomNum = Math.floor(Math.random() * range);
  return targetData[randomNum];
};


// const randomRange = (n) => {
//   return Math.floor(Math.random() * n);
// };

const starRating = () => {
  const num = Math.random() * 5;
  const stars = num.toFixed(1);
  return stars;
};

const createReviewRow = () => {
  const reviewRow = {
    name: pickRandomData(fakeData.names),
    picture: pickRandomData(fakeData.pictures),
    date: pickRandomData(fakeData.dates),
    rating: starRating(),
    review: pickRandomData(fakeData.reviews),
  };
  return reviewRow;
};

console.log(createReviewRow());
