/*
This script contains a function that check if a set of string
starts with a string
*/
export default function cleanSet(set, substring) {
  // If substring is an empty string
  if (!set || !substring || !(set instanceof Set)) {
    return '';
  }
  const output = [];
  for (const string of set.values()) {
    if (typeof string === 'string' && string.startsWith(substring)) {
      output.push(string.substring(substring.length));
    }
  }
  return output.join('-');
}
