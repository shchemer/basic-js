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
console.log(getEmailDomain('prettyandsimple@example.com'));
console.log(getEmailDomain('someaddress@yandex.ru'));
console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com'));
console.log(getEmailDomain('admin@mailserver2.ru'));
console.log(getEmailDomain('example-indeed@strange-example.com'));
console.log(getEmailDomain('example-indeedstrange-example.com'));

module.exports = {
  getEmailDomain
};
