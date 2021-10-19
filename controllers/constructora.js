const fs = require('fs');

const constructoras = fs.readFileSync('datos/datos-constructora.json');

let constructora = JSON.parse(constructoras);

const crearConstructora = (req, res) => {
    const {
        id,
        nombre

    } = req.body;

    if (!id || !nombre ) {
        res.status(400).send("Incomplete field");
        return;
    }

    const nuevaContructora = {
        id,
        nombre,      
    };


    constructora.push(nuevaContructora);
    fs.writeFileSync('datos/datos-constructora.json', JSON.stringify(constructora, null, 2));
    res.json(nuevaContructora);

};

const obtenerContructoras = (req,res) =>{
    res.json(constructora);
}


const obtenerContructorasPorID = (req,res) =>{
    const encuentra = constructora.some(c => c.id === parseInt(req.params.id));
    if (encuentra) {
        res.json(constructoras.filter(c => c.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({ msg: `No builder found with ID : ${req.params.id}`});
    }
}


const obtenerContructorasPorNombre= (req,res) =>{
    const encuentra = constructora.some(c =>c.nombre.toLowerCase() === (req.query.nombre.toLowerCase()));
    if (found) {
        res.json(constructoras.filter(c => c.nombre.toLowerCase() === (req.query.nombre.toLowerCase())));
    }
    else{
        res.status(400).json({ msg: `No builder found with the name :${req.query.nombre}`});
    }
}


const actualizarContructoras = (req, res) => {
    const id = parseInt(req.params.id);
    const {
        nombre = '',
    } = req.body;

    const constructoraItem = constructora.find(constructoraItem => constructoraItem.id === parseInt(req.params.id));
    if (constructoraItem) {
        const indice = constructora.indexOf(constructoraItem);
        const contructoraActualizada = {
            id,
            nombre
             
        };

        if (!nombre) {
            res.status(400).send("Incomplete field");
            return;
        }

        constructora[indice] = contructoraActualizada;

        fs.writeFileSync('datos/datos-constructora.json', JSON.stringify(constructora, null, 2));
        res.json({ msg: 'Updated builder', contructoraActualizada });
    } else {
        res.status(400).json({ msg: `There is no builder with the ID : ${req.params.id}` });
    }
};




const eliminarContructora = (req,res) =>{
    const encuentra = constructora.some(c => c.id === parseInt(req.params.id));
    
    if (encuentra) {
        constructora = constructora.filter(c => c.id !== parseInt(req.params.id));

        fs.writeFileSync('datos/datos-constructora.json', JSON.stringify(constructora, null, 2));
        res.json({ msg: 'Builder removed', constructora });
    } else {
        res.status(400).json({ msg: `No builder found with ID : ${req.params.id}` });
    }
}

module.exports ={
    obtenerContructoras,
    obtenerContructorasPorID,
    obtenerContructorasPorNombre,
    crearConstructora,
    actualizarContructoras,
    eliminarContructora
}