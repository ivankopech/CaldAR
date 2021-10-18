const { Schema, model } = require('mongoose');

const EdificioSchema = Schema({
  nombre: {
    type: String,
    required: [true,'The name field is required'],
  },
  direccion: {
    type: String,
    required: [true, 'The address field is required'],
  },
  altura: {
    type: Number,
    required: [true, 'The height field is required'],
  },
});

module.exports = model('Edificio', EdificioSchema);
