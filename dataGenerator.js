const faker = require('faker');
const Promise = require('bluebird');
const path = require('path');

var fs = require('fs');



var output = fs.createWriteStream(path.resolve('data.csv.gz'));
var zlib = require('zlib');

var file = fs.createWriteStream(path.resolve('file.csv'));
var compress = zlib.createGzip();
compress.pipe(output);


//modified to generate 10M restaurants' reivews and each restaurant has 5 reviews
 //compress.write('review_id,reviewer,picture,date_posted,rating,text_review,rest_id');

async function createAnyLinesYouWant(writer, lines) {
  for(let i = 1; i <= lines; i++) {
    const text = 
              i + ',' 
              + faker.name.findName() + ',' 
              + faker.image.imageUrl() + ',' 
              + faker.date.past() + ','
              + faker.finance.amount(0, 5, 1) + ',' 
              + faker.lorem.paragraph() + ',' 
              + Math.floor((i-1)/5 + 1);
    const ok = writer.write('\n' + text);
    if(!ok) {
      await new Promise(resolve => {
        writer.once('drain', resolve);
      })
    }
    if(i === lines) {
      writer.end();
    }
  }
}
createAnyLinesYouWant(compress, 50000000);

