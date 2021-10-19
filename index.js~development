const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const CONEXION_DB = process.env.DB_MONGODB;
const PORT = process.env.PORT || 5000;

const app = express();
// const rutas = require('./routes');

app.use(express.json());
// app.use('/', rutas);
app.use(cors());

// const rutaEdificios = require('./routes/rutas-edificios');
// const rutaTecnicos = require('./routes/rutas-tecnicos');
// const rutaConstructora = require('./routes/constructora-rutas');

// app.use('/edificios',rutaEdificios);
// app.use('/tecnicos',rutaTecnicos);
// app.use('/constructora',rutaConstructora);

//Uso del metodo de conexion de Mongoose
mongoose
.connect(CONEXION_DB)
.then(()=>{
    //INDICARA ESTE MENSAJE EN LA CONSOLA SI SE PUDO CONECTAR A LA BASE DE DATOS
    console.log('Database connected')
})
.catch((error)=>{
    //INDICARA ESTE MENSAJE EN LA CONSOLA SI NO SE PUDO CONECTAR A LA BASE DE DATOS
    console.log( `Database not connected: ${error}`)
});
app.get('/',(req,res) => {
    res.send('Server running in Heroku');

});
app.listen(PORT, () => {
    console.log('Example app listening at port: ' ,PORT);
});