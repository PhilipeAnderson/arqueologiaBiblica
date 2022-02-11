
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Temporada = new Schema({
  estudo_id: {
    type: Schema.Types.ObjectId, 
    required: true
  },
  titulo: {
    type: String, 
    required: true
  }
}); 