/**isSubsequence
 * Write a function called isSubsequence
 * which takes in two strings and checks
 * whether the characters in the first string
 * form a subsequence of the characters in the second string.
 *
 * The function should check whether the characters in the
 * first string appear somewhere in the second string
 * without their order changing
 */

// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  // Would we need to handle an empty str1?
  //edge case first string cannot be longer than second string
  if (str1.length > str2.length) return false;

  let pointer = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1[pointer] === str2[i]) {
      pointer++;
    }
    if (pointer >= str1.length) {
      return true;
    }
  }
  return false;
}

module.exports = isSubsequence;
