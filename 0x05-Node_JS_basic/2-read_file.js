const fs = require('fs');

function countStudents(filepath) {
  // read file synchronously
  const studentsData = fs.readFileSync(filepath, 'utf-8');

  if (!studentsData) {
    throw new Error('Cannot load the database');
  }

  const arr = studentsData.split('\n');

  arr.shift();
  arr.pop();

  console.log(`Number of students: ${arr.length}`);

  // get fields
  const fields = arr.map(((e) => e.split(',')[3]));
  const uniqueFields = new Set(fields);
  const fieldArr = [...uniqueFields];

  // log students in each field
  for (const field of fieldArr) {
    const lst = arr.filter(((e) => e.split(',')[3] === field));
    const names = lst.map(((e) => e.split(',')[0]));
    const numberOfStudents = lst.length;

    console.log(`Number of students in ${field}: ${numberOfStudents}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
