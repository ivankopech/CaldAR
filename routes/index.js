const express = require('express');

const development = require('./development');

const rutas = express.Router();

rutas.use('/patients',development);

module.exports = development;