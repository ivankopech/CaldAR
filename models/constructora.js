const { Schema, model } = require('mongoose');

const TecnicoSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'The name field is required'],
  },
});

module.exports = model('Tecnico', TecnicoSchema);
