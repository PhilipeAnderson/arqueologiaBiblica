const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//const { json } = require('express/lib/response');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'Capturando todos os registros !' });
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `Capturando um registro ${id}` });
});

app.post('/', (req, res) => {
  const body = req.body;
  res.json(body);
});

app.put('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `Atualizando um registro ${id}` });
});

app.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mesnagem: `Excluindo um registro ${id}` });
});

app.listen(3333, () => {
  console.log('Server running');
});