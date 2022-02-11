const express = require('express');
const router = express.Router();
const Estudo = require('../models/estudo');

router.get('/', async(req, res) => {
  try {
    const estudos = await Estudo.find({})
    res.json({ error: false, estudos })
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const estudo = await Estudo.findById(id)
    res.json({ error: false, estudo })
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
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

router.put('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const estudo = req.body;
    const estudoUpDate = await Estudo.findByIdAndUpdate(id, estudo);
    res.json({ error: false, estudoUpDate });
  }catch (err) {
    res.json({ error: true, message: err.message});
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    await Estudo.findByIdAndDelete(id);
    res.json({ error: false, message: 'Deletado com Sucesso' })
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;