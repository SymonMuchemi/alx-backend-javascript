const fs = require('fs').promises;

async function readDatabase(filepath) {
  try {
    const data = await fs.readFile(filepath, 'utf-8');

    const arr = data.split('\n');

    arr.shift();
    arr.pop();

    // get fields
    const fields = arr.map(((e) => e.split(',')[3]));
    const uniqueFields = new Set(fields);
    const fieldArr = [...uniqueFields];

    const dataObj = {};

    for (const field of fieldArr) {
      const lst = arr.filter(((e) => e.split(',')[3] === field));
      const names = lst.map(((e) => e.split(',')[0]));

      dataObj[field] = names;
    }

    return dataObj;
  } catch (error) {
    // console.log(error.message);
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
