
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Licao = new Schema({
  temporada_id: {
    type: Schema.Types.ObjectId, 
    required: true
  },
  titulo: {
    type: String, 
    required: true
  },
  descricao: {
    type: String, 
    required: true
  },
  numero: {
    type: Number, 
    required: true
  },
  capa: {
    type: String, 
    required: true
  }
}); 