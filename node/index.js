const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const cors = require('cors');
const app = express();

const estudoRoutes = require('./src/routes/estudos.routes');
const usuarioRoutes = require('./src/routes/usuarios.routes');

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/', estudoRoutes);
app.use('/usuario', usuarioRoutes);

app.listen(3333, () => {
  console.log('Server running');
});