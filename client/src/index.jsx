import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import db from '../../db/mysqldb';

ReactDOM.render(<App db={db} />, document.getElementById('root'));

function sum(a, b) {
  return a + b;
}

module.exports = sum;
