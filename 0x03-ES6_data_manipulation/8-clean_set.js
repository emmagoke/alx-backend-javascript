/*
This script contains a function that check if a set of string
starts with a string
*/
export default function cleanSet(set, substring) {
  // If substring is an empty string
  if (!substring) {
    return '';
  }
  const output = [];
  for (const string of set.values()) {
    if (string.startsWith(substring)) {
      output.push(string.substring(substring.length));
    }
  }
  return output.join('-');
}
