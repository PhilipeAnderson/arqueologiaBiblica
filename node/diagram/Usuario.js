var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Usuario = new Schema({
  nome: {
    type: String, required: true
  },
  email: {
    type: String, 
    required: true
  },
  senha: {
    type: String, 
    required: true
  }
}); 