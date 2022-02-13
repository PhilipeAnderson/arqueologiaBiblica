const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const database = require('./src/services/database');

const routes = require('./src/routes/routes');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3333, () => {
  console.log('Server running');
});