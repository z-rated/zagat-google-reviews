require('newrelic');
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');
//const db = require('../db/mysqldb');
const postgres = require('../Postgres/index');
const redisClient = require('../redis/index');

const app = express();


var port = process.env.PORT || 3003;

app.use(parser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });
app.get('/api/restaurants/:id/googlereviews', (req, res) => {
  var id = req.params.id;
  redisClient.get(id, (err, result) => {
    if(result != null) {
      //console.log(id + ' from redis');
      res.status(200).send(JSON.parse(result));
    } else {
      //console.log(id, "not in redis");
      postgres.getById(id, (err, results) => {
        if(err) {
          res.status(500).send(err);
        } else {
          //console.log(results);
          redisClient.set(id, JSON.stringify(results), () => {
            //console.log('set ' + id + ' in redis');
            res.status(200).send(results);
          });
        }
      })
    }
  })

// app.all('*', (req, res) => {
  
// });
  // db.get(req.params.id, (err, results) => {
  //   if (err) {
  //     res.sendStatus(501);
  //   } else {
  //     res.send(results);
  //   }
  // });
});

app.post('/api/restaurants/:id/googlereviews', (req, res) => {
  postgres.insertById(req.params.id, req.body, (err, result) => {
    if(err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200);
    }
  })
})

app.put('/api/restaurants/:id/googlereviews', (req, res) => {

})

app.delete('/api/restaurants/:id/googlereviews', (req, res) => {

})

var listener = app.listen(port, () => console.log('Listening on port ', listener.address().port));
