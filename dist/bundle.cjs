'use strict';

var lodashEs = require('lodash-es');

var foo = "hello world!";

const test  = require('./test.ts');

function main () {
  console.log(foo);
  console.log(lodashEs.sum([1,2,3]));
  console.log(test);
}

module.exports = main;
