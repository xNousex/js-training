'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase (a_string) {
    a_string = a_string.split(" ");
    for (var i = 0; i < a_string.length;  i++) {
        a_string[i] = a_string[i][0].toUpperCase() + a_string[i].substr(1);
    }

    return a_string.join(" ");
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('Hello world'), 'Hello World')
assert.strictEqual(jadenCase('coucou c est moi'), 'Coucou C Est Moi')
// End of tests */
