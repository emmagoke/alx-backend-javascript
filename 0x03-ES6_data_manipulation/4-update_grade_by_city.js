export default function updateStudentGradeByCity(students, city, newGrades) {
  const output = students.filter((item) => item.location === city).map(
    (item) => {
      const newItem = item;
      for (const grade of newGrades) {
        if (item.id === grade.studentId) {
          if (grade.grade) {
            newItem.grade = grade.grade;
          }
        }
      }
      if (!(newItem.grade)) {
        newItem.grade = 'N/A';
      }
      // console.log(item);
      return newItem;
    },
  );
  return output;
}
