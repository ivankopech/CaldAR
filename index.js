<<<<<<< HEAD

const http = require('http');

const fs = require('fs');


const paginaServicios = fs.readFileSync('servicioTecnico.html');


const servidor = http.createServer((request, response) => {
    //console.log(request.url);

    if(request.url === '/serviciotecnico'){
        return response.end(paginaServicios);
    } else if(request.url === '/serviciotecnico'){

    if(request.url === '/tecnicos'){
        return response.end(paginaTecnico);
    } else if(request.url === '/contacto'){
 
        return response.end('pagina Contacto');
    } else if(request.url === '/'){
        return response.end('pagina Inicio');
    } else{
 
        // response.writeHead(404);

        response.writeHead(404);

        response.end('pagina no encontrada');
    }
    
    
});
servidor.listen(3000);


// const express = require('express');

// const app = express();

// app.listen(3000, () => {
//     console.log('app corriendo en puerto 3000');
// })

// //rutas
// app.get('/', (request, response) => {
//     response.json({
//         nombre: 'ivan'
//     });
// })

// app.get('/tecnicos', (request, response) =>{
//     response.send({
//     nombre: 'ivan'
//     })
// })

=======
console.log('hi');
>>>>>>> 54eb7db8b75c92d5498f2ec4455daab4315488f5
