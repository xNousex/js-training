'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */


 function cutFirst (word) {
     return word.slice(2);
 }
 function cutLast (word) {
    return word.substring(0, word.length - 2)
}
function cutFirstLast (word) {
    word = word.slice(1);
    return word.substring(0, word.length - 1)
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('hello'), 'llo')
assert.strictEqual(cutLast('hello'), 'hel')
assert.strictEqual(cutFirstLast('hello'), 'ell')

// End of tests */
