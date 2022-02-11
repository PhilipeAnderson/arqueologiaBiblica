const mongoose = require('mongoose');

const Estudo = mongoose.model('Estudo', {
  titulo: String,
  tipo: String,
  capa: String,
  logo: String,
  thumb: String,
  descricao: String,
  duracao: String,
  professores: Array,
  genero: Array,
  cenas: Array
})

module.exports = Estudo;