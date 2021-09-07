console.log('hi');

const { response, request } = require('express');
const express = require('express');

const app = express()

const path = require('path')

app.listen(3001, () =>{
    console.log('Aplicacion corriendo en el puerto 3000')
})

//Rutas
app.get('/' ,(request , response) =>{
    response.sendFile(path.resolve(__dirname , 'index.html'))
})

app.get('/calderas', (request, response)=> {
    response.sendFile(path.resolve(__dirname , 'calderas.html'))
})





















// const http = require('http');

// const fs = require('fs')

// //variables para llamar los html
// const paginaInicio = fs.readFileSync('index.html')
// const paginaCaldera = fs.readFileSync('calderas.html')



// const server = http.createServer((request, response) => {
//     console.log(request.url)

//     if(request.url === '/'){
//         return response.end(paginaInicio)
//     }else if(request.url === '/calderas'){
//         return response.end(paginaCaldera)

//     }else{
//         response.writeHead(404)
//         response.end('Pagina no encontrada')
//     }
 
// })
// server.listen(3001)
