export default function getListStudentIds(objArray) {
  if (!Array.isArray(objArray)) {
    return [];
  }

  const map = new Map();

  for (let i = 0; i < objArray.length; i += 1) {
    map.set(i, objArray[i].id);
  }

  return Array.from(map.values());
}
