const mongoose = require('mongoose');

const Licao = mongoose.model('Licao', {
  temporada_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Temporada'
  },
  titulo: String,
  descricao: String,
  numero: Number,
  capa: String
})

module.exports = Licao;