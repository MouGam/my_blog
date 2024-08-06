const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 5885;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
