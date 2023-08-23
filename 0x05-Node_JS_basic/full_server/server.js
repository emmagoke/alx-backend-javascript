const express = require('express');
const routes = require('./routes/index');

const app = express();
const PORT = 1245;

routes(app);

app.listen(PORT, () => {});

module.exports = app;
