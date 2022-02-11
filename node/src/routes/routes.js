const express = require('express');
const router = express.Router();
const Estudo = require('../models/estudo');

router.get('/', (req, res) => {
  res.json({ mensagem: 'Capturando todos os registros !' });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `Capturando um registro ${id}` });
});

router.post('/', async(req, res) => {
  try {
    const estudo = req.body;
    const response = await new Estudo(estudo).save();
    res.json({ error: false, estudo: response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
  
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