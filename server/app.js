const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('../db/mysqldb');
require('dotenv').config();

const app = express();

app.set('port', 3333);

app.use(parser.json());

app.use(express.static(path.join(__dirname, '/../client')));

app.get('/api/restaurants/:id/googlereviews', (req, res) => {
  db.get(req.params.id, (err, results) => {
    if (err) {
      res.sendStatus(501);
    } else {
      res.send(results);
    }
  });
});

app.listen(3333, () => console.log('Listening on', app.get('port')));
