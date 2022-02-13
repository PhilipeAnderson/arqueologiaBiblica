const mongoose = require('mongoose');

const Estudo = mongoose.model('Estudo', {
  titulo: String,
  tipo: String,
  capa: String,
  logo: String,
  thumb: String,
  video: String,
  descricao: String,
  duracao: String,
  professores: Array,
  generos: Array,
  canal: Array
})

module.exports = Estudo;