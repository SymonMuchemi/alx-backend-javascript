export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((obj) => obj.id).reduce((prev, next) => prev + next);
}
