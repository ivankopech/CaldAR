const fs = require('fs');

const tecnicos = fs.readFileSync('datos/datos-tecnicos.json');

let tecnico = JSON.parse(tecnicos);

const createTechnician = (req, res) => {
    const {
        id,
        nombre,
        apellido,
        genero

    } = req.body;

    if (!id || !nombre || !apellido || !genero ) {
        res.status(400).send("Incomplete field");
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

const getTechnicians = (req,res) =>{
    res.json(tecnico);
}


const getTechnicianById = (req,res) =>{
    const encuentra = tecnico.some(c => c.id === parseInt(req.params.id));
    if (encuentra) {
        res.json(tecnicos.filter(c => c.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({ msg: `Technician with the ID was not found: ${req.params.id}`});
    }
}


const getTechnicianBySurname = (req,res) =>{
    const encuentra = tecnico.some(c =>c.apellido.toLowerCase() === (req.query.apellido.toLowerCase()));
    if (found) {
        res.json(tecnicos.filter(c => c.apellido.toLowerCase() === (req.query.apellido.toLowerCase())));
    }
    else{
        res.status(400).json({ msg: `No technician found with the surname: ${req.query.apellido}`});
    }
}


const updateTechnician = (req, res) => {
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
            res.status(400).send("Incomplete name");
            return;
        }
        if (!apellido) {
            res.status(400).send("Incomplete suername");
            return;
        }
        if (!genero) {
            res.status(400).send("Incomplete gender");
            return;
        }

        tecnico[indice] = tecnicoActualizado;

        fs.writeFileSync('datos/datos-tecnicos.json', JSON.stringify(tecnico, null, 2));
        res.json({ msg: 'Updated technician', tecnicoActualizado });
    } else {
        res.status(400).json({ msg: `There is no technician with the ID: ${req.params.id}` });
    }
};




const deleteTechnician = (req,res) =>{
    const encuentra = tecnico.some(c => c.id === parseInt(req.params.id));
    
    if (encuentra) {
        tecnico = tecnico.filter(c => c.id !== parseInt(req.params.id));

        fs.writeFileSync('datos/datos-tecnicos.json', JSON.stringify(tecnico, null, 2));
        res.json({ msg: 'Technician removed', tecnico });
    } else {
        res.status(400).json({ msg: `Technician with the ID was not found: ${req.params.id}` });
    }
}

module.exports ={
    getTechnicians,
    getTechnicianBySurname,
    getTechnicianById,
    createTechnician,
    updateTechnician,
    deleteTechnician
}
