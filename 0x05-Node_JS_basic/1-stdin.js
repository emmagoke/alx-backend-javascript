// This script contains a code that takes input from the user
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  if (data) {
    process.stdout.write(`Your name is: ${data}`);
  }
  process.exit();
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
