// Archivo seed.js
const mongoose = require('mongoose');

// Imporatmos el modelo Pet en este nuevo archivo.
const Pet = require('./models/Pet');

const pets = [
    {
        name: 'Curro',
        age: 3,
        species: 'dog',
    },
    {
        name: 'Nala',
        age: 2,
        species: 'cat',
    },
    {
        name: 'Margarita',
        age: 6,
        species: 'dog',
    },
    {
        name: 'Simón',
        age: 8,
        species: 'turtle',
    },
    {
        name: 'Max',
        age: 5,
        species: 'dog',
    },
];

const petDocuments = pets.map(pet => new Pet(pet));

// En este caso, nos conectaremos de nuevo a nuestra base de datos
// pero nos desconectaremos tras insertar los documentos
mongoose
    .connect('mongodb://localhost:27017/pets', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
            // Utilizando Pet.find() obtendremos un array con todos los pets de la db
        const allPets = await Pet.find();
            
            // Si existen pets previamente, dropearemos la colección
        if (allPets.length) {
        await Pet.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
            // Una vez vaciada la db de las mascotas, usaremos el array petDocuments
            // para llenar nuestra base de datos con todas las mascotas.
            await Pet.insertMany(petDocuments);
        })
    .catch((err) => console.log(`Error creating data: ${err}`))
        // Por último nos desconectaremos de la DB.
    .finally(() => mongoose.disconnect());