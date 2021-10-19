const { Schema, model } = require('mongoose');

const BoilerSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'The name field is required'],
  },
});

module.exports = model('Caldera', BoilerSchema);