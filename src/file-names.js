const {NotImplementedError} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let result = [];
    const fileNames = new Map();
    for (let i = 0; i < names.length; i++) {
        if (!fileNames.has(names[i])) {
            fileNames.set(names[i], 1);
            result[i] = names[i];
        } else {
            let currentValue = fileNames.get(names[i]);
            let nextValue = ++currentValue;
            fileNames.set(names[i], nextValue);
            let nextFileName = names[i] + `(${nextValue - 1})`;
            fileNames.set(nextFileName, 1);
            result[i] = nextFileName;
        }
    }
    return result;
}

module.exports = {
    renameFiles
};
