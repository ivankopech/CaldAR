
// const http = require('http');

// const fs = require('fs');


// const paginaEdificios = fs.readFileSync('edificios.html');

// const servidor = http.createServer((request, response) => {
//     //console.log(request.url);
    

//     if(request.url === '/edificios'){
//         return response.end(paginaEdificios);
//     } else if(request.url === '/contacto'){


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

 
//         // response.writeHead(404);

//         response.writeHead(404);

//         response.end('pagina no encontrada');
//     }
    
    
// });
// servidor.listen(3000);


const path = require('path');

const express = require('express');

const app = express();


const path = require('path');


app.listen(3000, () => {
    console.log('app corriendo en puerto 3000');
})


//rutas
app.get('/html', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'edificios.html'));
})
app.get('/edificios', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'edificios.json'));
})







