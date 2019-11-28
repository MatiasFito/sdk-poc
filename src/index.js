const _ = require('lodash');
const numRef = require('./ref.json');

/**
 * Convert a number to it's string equivalent.
 * @static
 * @param {number} num - The number in integer format.
 * @return {string} The string corresponding the number.
 */
const numToWord = (num) => {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');
}

/**
 * Convert a string to it's number equivalent.
 * @static
 * @param {string} word - The string of a number.
 * @return {number} The number in integer format.
 */
const wordToNum = (word) => {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
}

var webpackNumbers = {
  numToWord,
  wordToNum
};

module.exports = webpackNumbers;