// Archivo pet.routes.js dentro de la carpeta routes
const express = require('express');

const Pet = require('../models/Pet');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const pets = await Pet.find();
            return res.status(200).render('pets', { title: 'Upgrade pets', pets });  
        } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const pet = await Pet.findById(id);
            
            return res
        .status(200)
        .render('pet', { title: 'Upgrade single pet', pet: pet, id: id });  
        } catch (err) {
            next(err);
    }
});

router.get('/species/:species', async (req, res) => {
	const species = req.params.species;

	try {
		const petsBySpecies = await Pet.find({ species: species });
		return res.status(200).json(petsBySpecies);
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/age/:age', async (req, res) => {
	const age = req.params.age;

	try {
		const petsByAge = await Pet.find({ age: { $lt: age } });
		return res.status(200).json(petsByAge);
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.post('/create', async (req, res, next) => {
    try {
        // Crearemos una instancia de mascota con los datos enviados
        const newPet = new Pet({
            name: req.body.name,
            species: req.body.species,
            age: req.body.age,
        });
    
        // Guardamos la mascota en la DB
        const createdPet = await newPet.save();
        return res.status(200).json(createdPet);
    } catch (err) {
          // Lanzamos la función next con el error para que gestione todo Express
        next(err);
    }
});

router.put('/edit', async (req, res, next) => {
    try {
        const id = req.body.id;
    
        const updatedPet = await Pet.findByIdAndUpdate(
            id, // La id para encontrar el documento a actualizar
            { name: req.body.name }, // Campos que actualizaremos
            { new: true } // Usando esta opción, conseguiremos el documento actualizado cuando se complete el update
        );
    
        return res.status(200).json(updatedPet);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        
        // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        await Pet.findByIdAndDelete(id);
        return res.status(200).json('Pet deleted!');
    } catch (err) {
        next(err);
    }
});

module.exports = router;