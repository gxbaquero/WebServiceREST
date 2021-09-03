const mongoose = require('mongoose')

const peliSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  clasificacion: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('pelis', peliSchema)