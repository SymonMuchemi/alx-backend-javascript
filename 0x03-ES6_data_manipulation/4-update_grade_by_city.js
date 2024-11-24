export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter students by the given city
    .map((student) => {
      // Find the new grade for the student
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      // Return the student object with the updated or default grade
      return {
        ...student, // Copy all student attributes
        grade: gradeObj ? gradeObj.grade : 'N/A', // Add the grade or 'N/A' if not found
      };
    });
}
