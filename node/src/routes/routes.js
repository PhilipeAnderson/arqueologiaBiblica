const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensagem: 'Capturando todos os registros !' });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `Capturando um registro ${id}` });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json(body);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `Atualizando um registro ${id}` });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mesnagem: `Excluindo um registro ${id}` });
});


module.exports = router;