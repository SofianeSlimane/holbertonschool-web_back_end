export default function getListStudentIds(Arr) {
  if (Array.isArray(Arr) !== true) {
    return [];
  }

  return Arr.map((item) => item.id);
}
