/**pivotIndex
 * Write a function called pivotIndex,
 * which accepts an array of integers,
 * and returns the pivot index where
 * the sum of the items to the left equal
 * to the sum of the items to the right
 */
// add whatever parameters you deem necessary
function pivotIndex(arr) {
  let rightSum = arr.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  let pivotIdx = -1;
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    if (leftSum === rightSum) {
      pivotIdx = i;
      break;
    }
    rightSum -= arr[i];
  }
  return pivotIdx;
}

module.exports = pivotIndex;
