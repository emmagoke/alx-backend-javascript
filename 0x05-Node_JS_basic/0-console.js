// This script contaains a function that prints in STDOUT the string argument.

function displayMessage(value) {
  process.stdout.write(value + '\n');
}

module.exports = displayMessage;