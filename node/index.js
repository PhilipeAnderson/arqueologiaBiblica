const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./src/routes/routes');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/arqueologiaBiblica', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3333, () => {
  console.log('Server running');
});