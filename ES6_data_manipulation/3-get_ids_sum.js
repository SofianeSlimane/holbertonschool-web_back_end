export default function getStudentIdsSum(studList) {
  const idList = studList.map((item) => item.id);
  return idList.reduce((accumulator, currentValue) => accumulator + currentValue);
}
