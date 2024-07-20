import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const student1 = new ClassRoom(19);
  const student2 = new ClassRoom(20);
  const student3 = new ClassRoom(34);

  return [student1, student2, student3];
}
