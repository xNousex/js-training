'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */


 function yell(a_string) 
 {
    return a_string.toUpperCase();
 }
//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('Hello World!'),"HELLO WORLD!")

// End of tests */
