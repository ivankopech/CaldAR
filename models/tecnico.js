const { Schema, model } = require('mongoose');

const TecnicoSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'The name field is required'],
  },
  apellido: {
    type: String,
    required: [true, 'The surname field is required'],
  },
  especializaciones: {
    type: [String],
    default: [],
  },
  telefono: {
    type: String,
    required: [true, 'The phone field is required'],
  },
  dni: {
    type: String,
    required: [true, 'The DNI field is required'],
  },
  direccion: {
    type: String,
    required: [true, 'The address field is required'],
  },
});

module.exports = model('tecnicos', TecnicoSchema);