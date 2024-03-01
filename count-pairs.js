/** countPairs
 * Given an array of integers and a number
 * find the number of pairs of integers
 * in the array whose sum is equal to the
 * second parameter. You can assume that
 * there will be no duplicate values in the array
 *
 */
// add whatever parameters you deem necessary

function countPairs(arr, targetSum) {
  let count = 0;
  //we can use a set to track seen numbers
  let seen = new Set();
  //loop through the array
  for (let num of arr) {
    //Check for the other number needed to have a pair === targetSum
    let complement = targetSum - num;
    //If complement is in the set, we found a pair
    if (seen.has(complement)) {
      //when a pair is found we can increase count
      //and delete that number and the complement
      count++;
      seen.delete(complement);
      seen.delete(num);
    } else {
      //if the number is not in the set, it hasnt
      // been seen and we can add it
      seen.add(num);
    }
  }
  return count;
}

module.exports = countPairs;
