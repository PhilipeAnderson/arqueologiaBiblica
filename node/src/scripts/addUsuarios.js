const database = require('../services/database');
const Usuarios = require('../models/usuario');
const usuariosJSON = require('../data/usuario.json');


const addUsuarios = async () => {
  
  try {
    for(let usuario of usuariosJSON) {
      console.log(`Inserindo ${usuario.nome}`)
      await new Usuarios(usuario).save();
    }
    console.log('Finalizou')
  } catch (err){
      console.log(err.message)
  }
}

addUsuarios();