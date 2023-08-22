const express = require('express');

const PORT = 1245;

const app = express();

// for the home route
app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(PORT, () => {});

module.exports = app;
