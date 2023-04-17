// const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!(isFinite(sampleActivity)) || typeof sampleActivity != 'string' || !(parseFloat(sampleActivity)) || parseFloat(sampleActivity) < 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let v = MODERN_ACTIVITY / sampleActivity;
  age = Math.ceil(Math.log(v) / k);
  return age;
}

module.exports = {
  dateSample
};
