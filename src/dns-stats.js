const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  let domains = {};
  arr = arr.map(item => item.split('.').reverse());
  arr.map(item => {
    let domain = '';
    for (let i = 0; i < item.length; i++) {
      domain += '.' + item[i];
      if (domain in domains) {
        domains[domain] = ++domains[domain];
      }
      else {
        domains[domain] = 1;
      }
    }
  })
  return domains;
}

module.exports = {
  getDNSStats
};
