const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let stringValueOfNumber = n.toString();
    let numbers = [];
    for (let i = 0; i < stringValueOfNumber.length; i++) {
        numbers[i] = stringValueOfNumber.slice(0, i) + stringValueOfNumber.slice(i + 1, stringValueOfNumber.length)
    }

    let maxNumber = Number.parseInt(numbers[0]);

    for (let i = 1; i < numbers.length; i++) {
        let currentValue = Number.parseInt(numbers[i]);
        if (currentValue > maxNumber) {
            maxNumber = currentValue;
        }

    }

    return maxNumber;

}

module.exports = {
    deleteDigit
};
