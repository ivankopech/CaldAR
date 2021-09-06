const http = require('http');

const fs = require('fs');

const paginaTecnico = fs.readFileSync('tecnicos.html');

const servidor = http.createServer((request, response) => {
    //console.log(request.url);
    

    if(request.url === '/tecnicos'){
        return response.end(paginaTecnico);
    } else if(request.url === '/contacto'){
        return response.end('pagina Contacto');
    } else if(request.url === '/'){
        return response.end('pagina Inicio');
    } else{
        response.writeHead(404);
        response.end('pagina no encontrada');
    }
    
    
});
servidor.listen(3000);