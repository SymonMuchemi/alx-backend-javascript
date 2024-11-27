const express = require('express');
const mainRouter = require('./routes/index');

const app = express();
const PORT = 1245;

app.use('/', mainRouter);

app.listen(PORT);
