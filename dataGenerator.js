const faker = require('faker');



var fs = require('fs')




var output = fs.createWriteStream('data.csv.gz');
var zlib = require('zlib');
var compress = zlib.createGzip();
compress.pipe(output);
for(let i = 1; i <= 10000000; i++) {
  let text = 
            i + ',' 
            + faker.name.findName() + ',' 
            + faker.image.imageUrl() + ',' 
            + faker.date.past() + ',' +
            + faker.finance.amount(0, 5, 1) + ',' 
            + faker.lorem.paragraph() + ',' 
            + faker.random.number(100000);
  compress.write(text+'\n');
}

compress.end();
compress.on('finish', () => {
  console.log('...done')
});

compress.on('error', function(err) {
  console.log(err.stack);
});


