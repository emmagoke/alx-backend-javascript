/* This function returns a boolean if all the elements in the array exist within the set.
It accepts two arguments: a set (Set) and an array (Array).
*/
export default function hasValuesFromArray(set, array) {
  const subset = new Set(array);
  for (const item of subset) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
