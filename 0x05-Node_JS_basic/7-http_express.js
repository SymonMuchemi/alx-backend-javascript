const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;

async function readCSVFile(filepath) {
  try {
    const data = await fs.readFile(filepath, 'utf-8');
    return data;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

async function countStudents(database) {
  try {
    const data = await readCSVFile(database);

    let responseStr = '';

    const arr = data.split('\n');

    arr.shift();
    arr.pop();

    responseStr += `Number of students: ${arr.length}\n`;

    // get fields
    const fields = arr.map(((e) => e.split(',')[3]));
    const uniqueFields = new Set(fields);
    const fieldArr = [...uniqueFields];

    // log students in each field
    for (const field of fieldArr) {
      const lst = arr.filter(((e) => e.split(',')[3] === field));
      const names = lst.map(((e) => e.split(',')[0]));
      const numberOfStudents = lst.length;

      responseStr += `Number of students in ${field}: ${numberOfStudents}. List: ${names.join(', ')}\n`;
    }

    return responseStr;
  } catch (error) {
    return 'Cannot load the database';
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const data = await countStudents(process.argv[2]);

  res.send(`This is the list of our students\n${data}`);
});

app.listen(PORT);

module.exports = app;
