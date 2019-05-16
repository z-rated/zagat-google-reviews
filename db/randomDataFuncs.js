const fakeData = require('./fakeData.js');

const pickRandomData = (targetData) => {
  var range = targetData.length;
  var randomNum = Math.floor(Math.random() * range);
  return targetData[randomNum];
};


const randomRange = (n) => {
  return Math.floor(Math.random() * n);
};

const starRating = () => {
  var num = Math.random() * 5;
  var stars = num.toFixed(1);
  return stars;

}

const createReviewRow = () => {
  var reviewRow = {
    name : pickRandomData(fakeData.names),
    picture : pickRandomData(fakeData.pictures),
    date : pickRandomData(fakeData.dates),
    rating : starRating(),
    review : pickRandomData(fakeData.reviews)
  }
  return reviewRow;
};

