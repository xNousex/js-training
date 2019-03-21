'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

 function keepFirst(a_string){
    return a_string.substr(0,2)
 }
 function keepLast(a_string){
    return a_string.substr(a_string.length-2, 2)
 }
 function keepFirstLast(a_string){
    return a_string.substr(2, 2)
 }


//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('Hello world'), 'He')
assert.strictEqual(keepLast('Hello world'), 'ld')
assert.strictEqual(keepFirstLast('Hello world'), 'll')

// End of tests */
