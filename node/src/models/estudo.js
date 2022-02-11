const mongoose = require('mongoose');

const Estudo = mongoose.model('Estudo', {
  title: {
   type: String,
   required: true
  },
  description: String,
  teacher: String,
  type: String,
})

module.exports = Estudo;