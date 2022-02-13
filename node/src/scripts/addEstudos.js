const database = require('../services/database');
const Estudos = require('../models/estudo');
const estudosJSON = require('../data/estudo.json');


const addEstudos = async () => {
  
  try {
    for(let estudo of estudosJSON) {
      console.log(`Inserindo ${estudo.titulo}`)
      await new Estudos(estudo).save();
    }
    console.log('Finalizou')
  } catch (err){
      console.log(err.message)
  }
}

addEstudos();