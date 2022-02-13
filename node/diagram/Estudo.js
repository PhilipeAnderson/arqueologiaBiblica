
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Estudo = new Schema({
  titulo: {
    type: String, 
    required: true
  },
  tipo: {
    type: String, 
    required: true
  },
  capa: {
    type: String, 
    required: true
  },
  logo: {
    type: String, 
    required: true
  },
  thumb: {
    type: String, 
    required: true
  },
  video: {
    type: String,
    required: true
  },
  descricao: {
    type: String, 
    required: true
  },
  duracao: {
    type: String, 
    required: true
  },
  professores: [{
    type: String, 
    required: true
  }],
  generos: [{
    type: String, 
    required: true
  }],
  canal: [{
    type: String, 
    required: true
  }]
}); 