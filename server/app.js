const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('../db/mysqldb');

const app = express();

app.set('port', 3003);

app.use(parser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/restaurants/:id/googlereviews', (req, res) => {
  db.get(req.params.id, (err, results) => {
    if (err) {
      res.sendStatus(501);
    } else {
      res.send(results);
    }
  });
});

app.post('/api/restaurants/:id/googlereviews', (req, res) => {

})

app.put('/api/restaurants/:id/googlereviews', (req, res) => {

})

app.delete('/api/restaurants/:id/googlereviews', (req, res) => {

})

app.listen(3003, () => console.log('Listening on', app.get('port')));
