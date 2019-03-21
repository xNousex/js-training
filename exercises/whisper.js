'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */


 function whisper(a_string) {
    a_string = a_string.toLowerCase();
 
    return a_string.replace('*', '\n').trim();
 }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(whisper('Hello World!'), 'hello world!')
assert.strictEqual(whisper('Hello*World!'), 'hello\nworld!')

// End of tests */
