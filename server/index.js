const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pool = require('./db');

require('dotenv').config();

const writeTextRouter = require('./router/writeText');

const app = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(cors())

app.use(express.json());

app.use('/writeText', writeTextRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
