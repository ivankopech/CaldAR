const fs = require('fs');

const calderas = fs.readFileSync('datos/datos-calderas.json');

let caldera = JSON.parse(calderas);

const crearCalderas = (req, res) => {
    const {
        id,
        tipo,
        fecha


    } = req.body;

    if (!id || !tipo ||fecha ) {
        res.status(400).send("Incomplete field");
        return;
    }

    const nuevaCaldera = {
        id,
        tipo,
        fecha      
    };


    caldera.push(nuevaCaldera);
    fs.writeFileSync('datos/datos-calderas.json', JSON.stringify(caldera, null, 2));
    res.json(nuevaCaldera);

};

const obtenerCalderas = (req,res) =>{
    res.json(caldera);
}


const obtenerCalderaPorID = (req,res) =>{
    const encuentra = caldera.some(c => c.id === parseInt(req.params.id));
    if (encuentra) {
        res.json(calderas.filter(c => c.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({ msg: `No boiler found with ID : ${req.params.id}`});
    }
}


const obtenerCalderaPorTipo= (req,res) =>{
    const encuentra = caldera.some(c =>c.tipo.toLowerCase() === (req.query.tipo.toLowerCase()));
    if (encuentra) {
        res.json(calderas.filter(c => c.tipo.toLowerCase() === (req.query.tipo.toLowerCase())));
    }
    else{
        res.status(400).json({ msg: `No boiler found with type :${req.query.tipo}`});
    }
}


const actualizarCalderas = (req, res) => {
    const id = parseInt(req.params.id);
    const {
        tipo = '',
        fecha = '',
    } = req.body;

    const calderaItem = caldera.find(calderas => calderaItem.id === parseInt(req.params.id));
    if (calderaItem) {
        const indice = caldera.indexOf(calderaItem);
        const calderaActualizada = {
            id,
            tipo,
            fecha
             
        };

        if (!tipo) {
            res.status(400).send("Incomplete field");
            return;
        }

        caldera[indice] = calderaActualizada;

        fs.writeFileSync('datos/datos-calderas.json', JSON.stringify(caldera, null, 2));
        res.json({ msg: 'Boiler updated', calderaActualizada });
    } else {
        res.status(400).json({ msg: `There is no boiler with the ID : ${req.params.id}` });
    }
};




const eliminarCaldera = (req,res) =>{
    const encuentra = caldera.some(c => c.id === parseInt(req.params.id));
    
    if (encuentra) {
        caldera = caldera.filter(c => c.id !== parseInt(req.params.id));

        fs.writeFileSync('datos/datos-calderas.json', JSON.stringify(caldera, null, 2));
        res.json({ msg: 'Caldera Eliminada', caldera });
    } else {
        res.status(400).json({ msg: `No se encontro caldera con el ID : ${req.params.id}` });
    }
}

module.exports ={
    obtenerCalderas,
    obtenerCalderaPorID,
    obtenerCalderaPorTipo,
    crearCalderas,
    actualizarCalderas,
    eliminarCaldera
}