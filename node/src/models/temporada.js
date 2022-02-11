const mongoose = require('mongoose');

const Temporada = mongoose.model('Temporada', {
  estudo_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Estudo'
  },
  titulo: String
})

module.exports = Temporada;