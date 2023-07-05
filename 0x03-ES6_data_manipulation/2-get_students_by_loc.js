export default function getStudentsByLocation(array, city) {
  const output = array.filter((item) => item.location === city);
  return output;
}
