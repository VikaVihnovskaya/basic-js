const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const mapOne = new Map();
    const mapTwo = new Map();
    for (let i = 0; i < s1.length; i++) {
        let char = s1.charAt(i);
        if (mapOne.has(char)) {
            let currentValue = mapOne.get(char);
            mapOne.set(char, ++currentValue);
        } else {
            mapOne.set(char, 1);
        }
    }
    for (let i = 0; i < s2.length; i++) {
        let char = s2.charAt(i);
        if (mapTwo.has(char)) {
            let currentValue = mapTwo.get(char);
            mapTwo.set(char, ++currentValue);
        } else {
            mapTwo.set(char, 1);
        }
    }
    let count = 0;
    for (let key of mapOne.keys()) {
        if (mapTwo.has(key)) {
            count += Math.min(mapOne.get(key), mapTwo.get(key));
        }
    }

    return count;

}

module.exports = {
    getCommonCharacterCount
};
