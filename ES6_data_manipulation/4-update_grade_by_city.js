export default function updateStudentGradeByCity(studList, city, newGrades) {
  const cityStudList = studList.filter((item) => item.location === city);

  cityStudList.map((item) => {
    for (const elem of newGrades) {
      const stud = item;
      if ('grade' in elem && elem.studentId === stud.id) {
        stud.grade = elem.grade;
      }
    }
    for (const obj of cityStudList) {
      if (obj.grade === undefined) {
        obj.grade = 'N/A';
      }
    }
    return null;
  });
  return cityStudList;
}
