const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  rl.output.write(`Your name is: ${input}\r`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
