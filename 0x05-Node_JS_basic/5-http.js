const fs = require('fs').promises;
const http = require('http');
const url = require('url');

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
}

const app = http.createServer((req, res) => {
  const urlPath = url.parse(req.url, true).pathname;

  if (urlPath === '/') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    return res.end('Hello Holberton School!');
  }

  if (urlPath === '/students') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((data) => res.end(data))
      .catch((error) => res.end(error.message));
    return; // Ensure the function returns after handling the /students route
  }

  // Handle other routes or return a 404
  res.writeHead(404, { 'content-type': 'text/plain' });
  res.end('Not Found');
}).listen(1245);

module.exports = app;
