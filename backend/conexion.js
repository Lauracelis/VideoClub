const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmovie');

const objetobd=mongoose.connection

objetobd.on('connected', ()=>{console.log('conexion correcta a mongodb')})
objetobd.on('error', ()=>{console.log('error conexion a mongodb')})

module.exports = mongoose