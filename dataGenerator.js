const faker = require('faker');
const Promise = require('bluebird');
const path = require('path');

var fs = require('fs');



var restaurantWriteStream = fs.createWriteStream(path.resolve('restaurants.csv'));

var userWriteStream = fs.createWriteStream(path.resolve('users.csv'));

var reviewWriteStream = fs.createWriteStream(path.resolve('reviews.csv'));

restaurantWriteStream.write('id,restaurant');
userWriteStream.write('id,username,profile_pic');
reviewWriteStream.write('review_id,date_posted,rating,text_review,restaurant_id,user_id');


 //"review_id,reviewer,picture,date_posted,rating,text_review,rest_id"

async function writeData(reviewWriter, restaurantWriter, userWriter, number) {
  const start = new Date();
  for(let i = 1; i <= number; i++) {
    const restaurant = i + ',' + faker.name.findName()+`'s`;
    const ableWriteRes = restaurantWriter.write('\n'+restaurant);
    if(!ableWriteRes) {
      await new Promise(resolve => {
        restaurantWriter.once('drain', resolve);
      })
    }
    const user = (number - i + 1) + ',' + faker.name.findName() + ',' + faker.image.avatar();
    const ableWriteUser = userWriter.write('\n'+user);
    if(!ableWriteUser) {
      await new Promise(resolve => {
        userWriter.once('drain', resolve);
      })
    }
    for(let j = 1; j <= 5; j++) {
      const review = ((i - 1) * 5 + j) + ',' 
                  + faker.date.past() + ','
                  + faker.finance.amount(0, 5, 1) + ',' 
                  + faker.lorem.paragraph() + ',' 
                  + i + ','
                  + (number - i + 1);

      const ableWriteReview = reviewWriter.write('\n' + review);
      if(!ableWriteReview) {
        await new Promise(resolve => {
          reviewWriter.once('drain', resolve);
        })
      }
    }
    if(i === number) {
      reviewWriter.end(()=>{
        console.log('End of writing reviews!')
      });
      userWriter.end(()=>{
        console.log('End of writing users!')
      });
      restaurantWriter.end(()=>{
        let end = new Date();
        console.log('End of write restaurants!\n' + `It took ${(end - start)/60000}mins to generate data of ${number} primary items`);
      });
    }
  }
}
writeData(reviewWriteStream,restaurantWriteStream, userWriteStream, 10000000);

