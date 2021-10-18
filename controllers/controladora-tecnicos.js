const fs = require('fs');

const tecnicos = fs.readFileSync('datos/datos-tecnicos.json');

let tecnico = JSON.parse(tecnicos);

const crearTecnico = (req, res) => {
    const {
        id,
        nombre,
        apellido,
        genero

    } = req.body;

    if (!id || !nombre || !apellido || !genero ) {
        res.status(400).send("Campo imcompleto");
        return;
    }

    const nuevoTecnico = {
        id,
        nombre,
        apellido,
        genero,      
    };


    tecnico.push(nuevoTecnico);
    fs.writeFileSync('datos/datos-tecnicos.json', JSON.stringify(tecnico, null, 2));
    res.json(nuevoTecnico);

};

const obtenerTecnicos = (req,res) =>{
    res.json(tecnico);
}


const obtenerTecnicoPorID = (req,res) =>{
    const encuentra = tecnico.some(c => c.id === parseInt(req.params.id));
    if (encuentra) {
        res.json(tecnicos.filter(c => c.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({ msg: `No se encontro tecnico con el ID: ${req.params.id}`});
    }
}


const obtenerTecnicosPorApellido = (req,res) =>{
    const encuentra = tecnico.some(c =>c.apellido.toLowerCase() === (req.query.apellido.toLowerCase()));
    if (found) {
        res.json(tecnicos.filter(c => c.apellido.toLowerCase() === (req.query.apellido.toLowerCase())));
    }
    else{
        res.status(400).json({ msg: `No se encontro tecnico con el apellido: ${req.query.apellido}`});
    }
}


const actualizarTecnicos = (req, res) => {
    const id = parseInt(req.params.id);
    const {
        nombre = '',
        apellido = '',
        genero = '',
    } = req.body;

    const tecnicoItem = tecnico.find(tecnicoItem => tecnicoItem.id === parseInt(req.params.id));
    if (tecnicoItem) {
        const indice = tecnico.indexOf(tecnicoItem);
        const tecnicoActualizado = {
            id,
            nombre,
            apellido,
            genero
             
        };

        if (!nombre) {
            res.status(400).send("nombre incompleto");
            return;
        }
        if (!apellido) {
            res.status(400).send("apellido incompleto");
            return;
        }
        if (!genero) {
            res.status(400).send("genero incompleto");
            return;
        }

        tecnico[indice] = tecnicoActualizado;

        fs.writeFileSync('datos/datos-tecnicos.json', JSON.stringify(tecnico, null, 2));
        res.json({ msg: 'tecnico actualizado', tecnicoActualizado });
    } else {
        res.status(400).json({ msg: `No hay tecnico con el ID: ${req.params.id}` });
    }
};




const eliminarTecnico = (req,res) =>{
    const encuentra = tecnico.some(c => c.id === parseInt(req.params.id));
    
    if (encuentra) {
        tecnico = tecnico.filter(c => c.id !== parseInt(req.params.id));

        fs.writeFileSync('datos/datos-tecnicos.json', JSON.stringify(tecnico, null, 2));
        res.json({ msg: 'tecnico eliminado', tecnico });
    } else {
        res.status(400).json({ msg: `No se encontro tecnico con el ID: ${req.params.id}` });
    }
}

module.exports ={
    obtenerTecnicos,
    obtenerTecnicosPorApellido,
    obtenerTecnicoPorID,
    crearTecnico,
    actualizarTecnicos,
    eliminarTecnico
}
