
// const http = require('http');

// const fs = require('fs');


// const paginaServicios = fs.readFileSync('servicioTecnico.html');


// const servidor = http.createServer((request, response) => {
//     //console.log(request.url);

//     if(request.url === '/serviciotecnico'){
//         return response.end(paginaServicios);
//     } else if(request.url === '/serviciotecnico'){

//     if(request.url === '/tecnicos'){
//         return response.end(paginaTecnico);
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
const rutaConstructora = require('./rutas/constructora-rutas');

const app = express();
app.use(express.json());
app.use(rutaConstructora);

const path = require('path');
const puerto = 3000;

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


// const path = require('path');
// const express = require('express');

// const app = express();

// app.listen(3000, () => {
//     console.log('app corriendo en puerto 3000');
// })

// app.get('/', (request, response) => {
//     response.sendFile(path.resolve(__dirname, 'constructoras.html'));
// })
// app.get('/constructoras', (request, response) => {
//     response.sendFile(path.resolve(__dirname, 'constructoras.json'));
// })




