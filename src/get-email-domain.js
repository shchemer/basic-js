const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  let atInd = str.lastIndexOf('@');
  if (atInd == -1) return;
  let emailDomain = str.slice(atInd + 1, str.length);
  return emailDomain;
}

module.exports = {
  getEmailDomain
};
