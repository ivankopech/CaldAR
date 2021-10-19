const { Schema, model } = require('mongoose');

const servicioTecnicoSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'The name field is required'],
  },
  apellido: {
    type: String,
    required: [true, 'The surname field is required'],
  },
  fecha: {
    type: Date,
    required: [true, 'The date field is required'],
  },
  id_Contructora: {
    type: [String],
    default: [],
  },
});

module.exports = model('servicioTecnico', servicioTecnicoSchema);
