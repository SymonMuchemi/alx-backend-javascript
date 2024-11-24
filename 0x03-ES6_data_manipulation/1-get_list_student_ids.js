export default function getListStudentIds(objArray) {
  const map = new Map();

  if (!Array.isArray(objArray)) {
    return [];
  }

  for (let i = 0; i < objArray.length; i += 1) {
    map.set(i, objArray[i].id);
  }

  return Array.from(map.values());
}
