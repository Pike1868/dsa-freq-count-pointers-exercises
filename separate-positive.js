/**separatePositive
 * Write a function called seperatePositive which
 * accepts an array of non-zero integers.
 * Separate the positive integers to the left
 * and the negative integers to the right
 * The positive numbers and negative numbers
 *  do not need to be in sorted order
 * The problem should be done in place
 * (do not build a copy of the input array)
 */
// add whatever parameters you deem necessary
function separatePositive(arr) {
  //two pointers
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] > 0) {
      left++;
    } else if (arr[right] < 0) {
      right--;
    } else {
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
      left++;
      right--;
    }
  }
  return arr;
}

module.exports = separatePositive;
