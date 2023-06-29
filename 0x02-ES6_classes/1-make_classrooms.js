import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const object1 = new ClassRoom(19);
  const object2 = new ClassRoom(20);
  const object3 = new ClassRoom(34);
  return [object1, object2, object3];
}
