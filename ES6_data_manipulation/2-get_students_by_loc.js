export default function getStudentsByLocation(studList, city) {
  return studList.filter((item) => item.location === city);
}
