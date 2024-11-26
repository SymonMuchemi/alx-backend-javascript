const fs = require('fs').promises;

async function readCSVFile(filepath) {
  try {
    const data = await fs.readFile(filepath, 'utf-8');

    return data;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

async function countStudents(database) {
  const data = await readCSVFile(database);

  if (!data) {
    throw new Error('Cannot load database');
  }

  const arr = data.split('\n');

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
