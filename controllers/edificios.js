const fs = require('fs');

const edificios = fs.readFileSync('datos/datos-edificios.json');

let edificio = JSON.parse(edificios);

const createBuilding = (req, res) => {
    const {
        id,
        nombre,
        calle,
        altura

    } = req.body;

    if (!id || !nombre || !calle || !altura ) {
        res.status(400).send("Incomplete field");
        return;
    }

    const nuevoEdificio = {
        id,
        nombre,
        calle,
        altura,      
    };


    edificio.push(nuevoEdificio);
    fs.writeFileSync('datos/datos-edificios.json', JSON.stringify(edificio, null, 2));
    res.json(nuevoEdificio);

};

const getBuildings = (req,res) =>{
    res.json(edificio);
}


const getBuildingById = (req,res) =>{
    const encuentra = edificio.some(c => c.id === parseInt(req.params.id));
    if (encuentra) {
        res.json(edificios.filter(c => c.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({ msg: `No building with ID found: ${req.params.id}`});
    }
}


const getBuildingByName = (req,res) =>{
    const encuentra = edificio.some(c =>c.nombre.toLowerCase() === (req.query.nombre.toLowerCase()));
    if (found) {
        res.json(edificios.filter(c => c.nombre.toLowerCase() === (req.query.nombre.toLowerCase())));
    }
    else{
        res.status(400).json({ msg: `No building found with the name: ${req.query.nombre}`});
    }
}


const updateBuilding = (req, res) => {
    const id = parseInt(req.params.id);
    const {
        nombre = '',
        calle = '',
        altura = '',
    } = req.body;

    const edificioItem = edificio.find(edificioItem => edificioItem.id === parseInt(req.params.id));
    if (edificioItem) {
        const indice = edificio.indexOf(edificioItem);
        const edificioActualizado = {
            id,
            nombre,
            calle,
            altura
             
        };

        if (!nombre) {
            res.status(400).send('Incomplete name');
            return;
        }
        if (!calle) {
            res.status(400).send('Incomplete street');
            return;
        }
        if (!altura) {
            res.status(400).send('Incomplete height');
            return;
        }

        edificio[indice] = edificioActualizado;

        fs.writeFileSync('datos/datos-edificios.json', JSON.stringify(edificio, null, 2));
        res.json({ msg: 'Updated building', edificioActualizado });
    } else {
        res.status(400).json({ msg: `There is no building with the ID: ${req.params.id}` });
    }
};




const deleteBuilding = (req,res) =>{
    const encuentra = edificio.some(c => c.id === parseInt(req.params.id));
    
    if (encuentra) {
        edificio = edificio.filter(c => c.id !== parseInt(req.params.id));

        fs.writeFileSync('datos/datos-edificios.json', JSON.stringify(edificio, null, 2));
        res.json({ msg: 'Building removed', edificio });
    } else {
        res.status(400).json({ msg: `No building with ID found: ${req.params.id}` });
    }
}

module.exports ={
    getBuildings,
    getBuildingById,
    getBuildingByName,
    createBuilding,
    updateBuilding,
    deleteBuilding
}
