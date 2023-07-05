/* This function returns an array of ids from a list of object.
   If the argument is not an array, the function is returning an empty array.
*/
export default function getListStudentIds(array) {
  let output = [];
  if (array instanceof Array) {
    output = array.map((item) => item.id);
    return output;
  }
  return output;
}
