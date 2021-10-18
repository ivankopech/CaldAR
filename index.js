
console.log('hi');

const { response, request } = require('express');
const express = require('express');

const app = express()

const path = require('path')
const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>{
    console.log('Aplicacion corriendo en el puerto 3000', PORT)
})

//Rutas
app.get('/' ,(request , response) =>{
    response.sendFile(path.resolve(__dirname , 'index.html'))
})

app.get('/calderas', (request, response)=> {
    response.sendFile(path.resolve(__dirname , 'calderas.html'))
})





