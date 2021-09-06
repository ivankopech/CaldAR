
// const http = require('http');

// const fs = require('fs');

// const paginaTecnico = fs.readFileSync('tecnicos.html');

// const servidor = http.createServer((request, response) => {
//     //console.log(request.url);
    

//     if(request.url === '/tecnicos'){
//         return response.end(paginaTecnico);
//     } else if(request.url === '/contacto'){
//         return response.end('pagina Contacto');
//     } else if(request.url === '/'){
//         return response.end('pagina Inicio');
//     } else{
//         response.writeHead(404);
//         response.end('pagina no encontrada');
//     }
    
// });
// servidor.listen(3000);


const path = require('path');
const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('app corriendo en puerto 3000');
})

//rutas
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'tecnicos.html'));
})
app.get('/tecnicos', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'tecnicos.json'));
})

app.get('/', (request, response) =>{
    response.send({
    nombre: 'ivan'
    })
});
servidor.listen(3000);
