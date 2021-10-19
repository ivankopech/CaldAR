const fs = require('fs');

const servicioTecnicos = fs.readFileSync('datos/datos-servicioTecnico.json');

let servicioTecnico = JSON.parse(servicioTecnicos);

const crearServiciosTecnicos = (req, res) => {
    const {
        id,
        tecnico,
        fecha,
        Id_edificio_contructora


    } = req.body;

    if (!id || !tecnico ||fecha|| Id_edificio_contructora ) {
        res.status(400).send("Incomplete field");
        return;
    }

    const nuevoServiciosTecnicos = {
        id,
        tecnico,
        fecha,
        Id_edificio_contructora     
    };


    servicioTecnico.push(nuevoServiciosTecnicos);
    fs.writeFileSync('datos/datos-servicioTecnico.json', JSON.stringify(servicioTecnico, null, 2));
    res.json(nuevoServiciosTecnicos);

};

const obtenerServicioTecnico = (req,res) =>{
    res.json(servicioTecnico);
}


const obtenerServicioTecnicoPorID = (req,res) =>{
    const encuentra = servicioTecnico.some(c => c.id === parseInt(req.params.id));
    if (encuentra) {
        res.json(servicioTecnicos.filter(c => c.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({ msg: `The technical service with the ID was not found : ${req.params.id}`});
    }
}


const obtenerServicioTecnicoPorTecnico= (req,res) =>{
    const encuentra = servicioTecnico.some(c =>c.tecnico.toLowerCase() === (req.query.tecnico.toLowerCase()));
    if (encuentra) {
        res.json(servicioTecnicos.filter(c => c.tecnico.toLowerCase() === (req.query.tecnico.toLowerCase())));
    }
    else{
        res.status(400).json({ msg: `No technical service found with the technician :${req.query.tecnico}`});
    }
}

const actualizarServicioTecnicos = (req, res) => {
    const id = parseInt(req.params.id);
    const {
        tecnico = '',
        fecha = '',
        Id_edificio_contructora = ''
    } = req.body;

    const servicioTecnicoItem = servicioTecnico.find(servicioTecnicos => servicioTecnicoItem.id === parseInt(req.params.id));
    if (servicioTecnicoItem) {
        const indice = servicioTecnico.indexOf(servicioTecnicoItem);
        const servicioTecnicoActualizado = {
            id,
            tecnico,
            fecha,
            Id_edificio_contructora  
             
        };

        if (!tecnico) {
            res.status(400).send("Incomplete field");
            return;
        }

        servicioTecnico[indice] = servicioTecnicoActualizado;

        fs.writeFileSync('datos/datos-servicioTecnico.json', JSON.stringify(servicioTecnico, null, 2));
        res.json({ msg: 'Updated technical service', servicioTecnicoActualizado });
    } else {
        res.status(400).json({ msg: `There is no technical service with the ID : ${req.params.id}` });
    }
};




const eliminarServicioTecnico = (req,res) =>{
    const encuentra = caldera.some(c => c.id === parseInt(req.params.id));
    
    if (encuentra) {
        servicioTecnico = servicioTecnico.filter(c => c.id !== parseInt(req.params.id));

        fs.writeFileSync('datos/datos-servicioTecnico.json', JSON.stringify(servicioTecnico, null, 2));
        res.json({ msg: 'Technical service removed', servicioTecnico });
    } else {
        res.status(400).json({ msg: `No technical service found with ID : ${req.params.id}` });
    }
}

module.exports ={
    obtenerServicioTecnico,
    obtenerServicioTecnicoPorID,
    obtenerServicioTecnicoPorTecnico,
    crearServiciosTecnicos,
    actualizarServicioTecnicos,
    eliminarServicioTecnico
}