const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rl.question('Your name is: ', (answer) => {
  console.log(`Hello, ${answer}`);
  console.log('This important software is now closing');
  rl.close();
});
