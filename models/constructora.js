const { Schema, model } = require('mongoose');

const ConstructionCompanySchema = Schema({
  nombre: {
    type: String,
    required: [true, 'The name field is required'],
  },
});

module.exports = model('ConstructionCompany', ConstructionCompanySchema);
