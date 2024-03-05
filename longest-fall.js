/**longestFall
 * Write a function called longestFall,
 * which accepts an array of integers,
 * and returns the length of the longest
 * consecutive decrease  of integers.
 *
 * ex:
 * longestFall([5,3,1,3,0]) // 3,  5-3-1 is the longest consecutive sequence of decreasing integers
 */

// add whatever parameters you deem necessary
function longestFall(arr) {
  //handle simple edge cases
  if (!arr.length) return 0;

  //initialize count and maxLength
  let count = 1;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      count++;
      maxLength = Math.max(count, maxLength);
    } else {
      count = 1;
    }
  }
  return maxLength || 1;
}

module.exports = longestFall;
