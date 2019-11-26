import _ from 'lodash';
import numRef from './ref.json';

export const numToWord = (num) => {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');
}

export const wordToNum = (word) => {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
}


/**
 * Numbers module
 * @module WebpackNumbers
 */
export default {

    /**
   * Convert a number to it's string equivalent.
   * @param {number} num - The number in integer format.
   * @return {string} The string corresponding the number.
   */
  numToWord,

  /**
   * Convert a string to it's number equivalent.
   * @param {string} word - The string of a number.
   * @return {number} The number in integer format.
   */
  wordToNum
};
