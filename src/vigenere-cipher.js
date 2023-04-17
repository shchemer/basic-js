// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(notReverse = true) {
    this.notReverse = notReverse;
  }
  alphabet() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numAlph = {};
    for (let i = 0; i < alphabet.length; i++) {
      numAlph[alphabet[i]] = i;
    }
    return [numAlph, alphabet];
  }
  turnOnMechanism(isEncrypt, text, key) {
    let textCopy = text.split(' ');
    text = text.toUpperCase().split(' ').join('');
    key = key.toUpperCase().split(' ').join('');
    let [numAlph, alphabet] = this.alphabet();
    let encStr = '';
    let indexEncChar;
    let prevIndex = 0;
    while(text.length != key.length) {
      if (key.length > text.length) {key = key.slice(0, text.length); break};
      key += key;
    }
    for (let i = 0; i < text.length; i++) {
      if (numAlph[text[i]] === undefined) {encStr += text[i]; continue;};
      if (isEncrypt) {
        indexEncChar = (numAlph[text[i]] + numAlph[key[i]]) % 26;
      }
      else {
        indexEncChar = (numAlph[text[i]] - numAlph[key[i]]) % 26;
        indexEncChar = (indexEncChar < 0) ? (indexEncChar + 26) % 26 : indexEncChar;
      }
      encStr += alphabet[indexEncChar];
    }
    textCopy = textCopy.map((item, index) => {
      let newItem;
      if (index == 0) {
        prevIndex += item.length;
        newItem = encStr.slice(0, item.length);
        return newItem;
      }
      else {
        newItem = encStr.slice(prevIndex, prevIndex + item.length);
        prevIndex += item.length;
        return newItem;
      }
    })
    textCopy = textCopy.join(' ');
    if (!this.notReverse) {
      textCopy = textCopy.split('').reverse().join('');
    }
    return textCopy;
  }
  encrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    return this.turnOnMechanism(true, text, key);
  }
  decrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    return this.turnOnMechanism(false, text, key);
  }
}

module.exports = {
  VigenereCipheringMachine
};
