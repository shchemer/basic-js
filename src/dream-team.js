const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(arr) {
  if (!(Array.isArray(arr))) return false;
  let teamName = '';
  arr = arr
          .filter((item) => (typeof item == 'string' && item.length > 0) ? true : false)
          .map(item => item.toUpperCase().trimStart().trimEnd())
          .sort((a, b) => {
                            if (a > b) {return 1};
                            if (a < b) {return -1};
                            if (a == b) {return 0};
                          })
          .map(item => teamName += item[0]);
  return teamName;
}

module.exports = {
  createDreamTeam
};
