// const http = require('http');

// const fs = require('fs');


// const paginaServicios = fs.readFileSync('servicioTecnico.html');


// const servidor = http.createServer((request, response) => {
//     //console.log(request.url);

//     if(request.url === '/serviciotecnico'){
//         return response.end(paginaServicios);
//     } else if(request.url === '/serviciotecnico'){

//     if(request.url === '/tecnicos'){
//         return response.end('paginaTecnico');
//     } else if(request.url === '/contacto'){
 
//         return response.end('pagina Contacto');
//     } else if(request.url === '/'){
//         return response.end('pagina Inicio');
//     } else{
 
//         // response.writeHead(404);

//         response.writeHead(404);

//         response.end('pagina no encontrada');
//     }
    
    
// });
// servidor.listen(3000);


const express = require('express');
const mongoose = require('mongoose');
const rutaEdificios = require('./rutas/rutas-edificios');

const app = express();
app.use(express.json());
app.use(rutaEdificios);

const path = require('path');
const puerto = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://JERE:JERE1234@cluster0.mukqz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then((result) => {
        console.log('base de datos conectada');
    })
    .catch((error) => {
        console.log(`base de datos no conectada, error: ${error} `)
    })

app.listen(puerto, () => {
    console.log(`example app listening at http://localhost:${puerto}`)
})

// app.listen(3000, () => {
//     console.log('app corriendo en puerto 3000');
// })


// //rutas
// app.get('/html', (request, response) => {
//     response.sendFile(path.resolve(__dirname, 'edificios.html'));
// })
// app.get('/edificios', (request, response) => {
//     response.sendFile(path.resolve(__dirname, 'edificios.json'));
// })

