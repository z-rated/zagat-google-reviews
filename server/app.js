const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const db = require('../db/mysqldb');

const app = express();

app.set('port', 3333);

app.use(parser.json());

app.use(express.static(path.join(__dirname, '/../client')));

if (!module.parent) {
  app.listen(3333);
  console.log('Listening on', app.get('port'));
}
