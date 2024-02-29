/**constructNote
 * Write a function called constructNote,
 * which accepts two strings a message and some letters.
 * The function should return true if the message can be
 * built with the letters that you are given.
 *
 * Assume that there are only lowercase letters and no space
 * or special characters in both the message and the letters
 *
 * Time Complexity: O(m+n)
 *
 */
// add whatever parameters you deem necessary
function makeFreqCounter(arr) {
  let freqCounter = new Map();

  for (let val of arr) {
    let valCount = freqCounter.get(val) || 0;
    freqCounter.set(val, valCount + 1);
  }
  return freqCounter;
}

function constructNote(msg, letters) {
  if (msg.length > letters.length) return false;
  const msgFreqCounter = makeFreqCounter(msg);
  const lettersFreqCounter = makeFreqCounter(letters);

  for (let key of msgFreqCounter.keys()) {
    if (
      !lettersFreqCounter.has(key) ||
      msgFreqCounter.get(key) > lettersFreqCounter.get(key)
    ) {
      return false;
    }
  }

  return true;
}

module.exports = constructNote;
