const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let dreamTeam = [];
    for (let i = 0; i < members.length; i++) {
        if (isString(members[i])) {
            members[i].trim()
            dreamTeam.push(members[i].trim().charAt(0).toUpperCase());
        }
    }
    dreamTeam.sort();
    return dreamTeam.join("");
}

function isString(str) {
    return typeof str == "string";
}

module.exports = {
    createDreamTeam
};
