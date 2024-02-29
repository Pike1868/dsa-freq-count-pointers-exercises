/**twoArrayObject
 * Write a function called twoArrayObject which accepts two arrays of varying lengths.
 * The first array consists of keys and the second one consists of values.
 * Your function should return an object created from the keys and values.
 * If there are not enough values the rest of keys should have a value of null.
 * If there are not enough keys, just ignore the rest of the values.
 *
 */
// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  let resultObj = {};
  for (let i = 0; i < keys.length; i++) {
    if (values[i] === undefined) {
      resultObj[keys[i]] = null;
    } else {
      resultObj[keys[i]] = values[i];
    }
  }
  return resultObj;
}

module.exports = twoArrayObject;
