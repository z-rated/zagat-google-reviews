const redis = require('redis');

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis connected!');  
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

module.exports = client;