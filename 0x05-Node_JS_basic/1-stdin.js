// This script contains a code that takes input from the user
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    process.stdout.write(`Your name is: ${input}`);
  }
  process.stdout.write('This important software is now closing\n');
});
