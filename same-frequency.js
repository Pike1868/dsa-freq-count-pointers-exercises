/**sameFrequency
 * Write a function called sameFrequency. Given two positive integers,
 * find out if the two numbers have the same frequency of digits
 *
 * Time Complexity: O(n+m)
 */
// add whatever parameters you deem necessary

function makeArrayFromNumber(num) {
  return num.toString().split("").map(Number);
}

function makeFreqCounter(arr) {
  let freq = {};

  for (let num of arr) {
    let numCount = freq[num] || 0;
    freq[num] = numCount + 1;
  }
  return freq;
}

function sameFrequency(int1, int2) {
  const int1Freq = makeFreqCounter(makeArrayFromNumber(int1));
  const int2Freq = makeFreqCounter(makeArrayFromNumber(int2));

  if (Object.keys(int1Freq).length !== Object.keys(int2Freq).length) {
    return false;
  }

  for (let key in int1Freq) {
    if (int1Freq[key] !== int2Freq[key]) {
      return false;
    }

    return true;
  }
}

module.exports = sameFrequency;
