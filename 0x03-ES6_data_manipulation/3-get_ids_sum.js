export default function getStudentIdsSum(array) {
  const initialValue = 0;
  const output = array.reduce((accumulator, item) => accumulator + item.id,
    initialValue);
  return output;
}
