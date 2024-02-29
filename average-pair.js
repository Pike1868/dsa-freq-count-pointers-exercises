/**averagePair
 * Write a function called averagePair.
 * Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array
 * where the average of the pair equals the target average
 * There may be more than one pair that matches the average target.
 *
 * Time complexity: O(n)
 */
// add whatever parameters you deem necessary
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;
    if (avg === targetAvg) {
      console.log([nums[left], nums[right]]);
      return true;
    } else if (avg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

module.exports = averagePair;
