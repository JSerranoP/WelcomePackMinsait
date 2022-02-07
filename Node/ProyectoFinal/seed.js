// Archivo seed.js
const mongoose = require('mongoose');

const Product = require('./models/Product');

const products = [
    {
        name: 'Tablet',
        age: 120,
        description: 'small tablet',
        image: '',
    },
    {
        name: 'Smarthphone',
        age: 500,
        description: 'mobile phone',
        image: '',
    },
    {
        name: 'Television',
        age: 1300,
        description: 'TV',
        image: '',
    },
    {
        name: 'Libro',
        age: 30,
        description: 'tapa blanda',
        image: '',
    },
    {
        name: 'Fifa 2022',
        age: 60,
        description: 'videojuego ps4',
        image: '',
    },
    {
        name: 'Pokemon',
        age: 50,
        description: 'videojuego nintendo switch',
        image: '',
    },
    {
        name: 'Auriculares',
        age: 120,
        description: 'auriculares',
        image: '',
    },
    {
        name: 'Nintendo switch',
        age: 340,
        description: 'consola',
        image: '',
    },
    {
        name: 'Guitarra',
        age: 60,
        description: 'guitarra',
        image: '',
    },
    {
        name: 'Guitarra electrica',
        age: 70,
        description: 'guitarra electrica',
        image: '',
    },
    {
        name: 'Memoria USB',
        age: 25,
        description: 'memoria usb 128gb',
        image: '',
    },
    {
        name: 'Cuerdas de guitarra',
        age: 10,
        description: 'cuerda de guitarra',
        image: '',
    },
    {
        name: 'Gafas VR',
        age: 530,
        description: 'gafas de realidad virtual',
        image: '',
    },
    {
        name: 'Raton ordenador',
        age: 15,
        description: 'raton para ordenador',
        image: '',
    },
    {
        name: 'Impresora',
        age: 70,
        description: 'impresora',
        image: '',
    },
    {
        name: 'Zapatillas',
        age: 30,
        description: 'zapatillas de correr',
        image: '',
    },
    {
        name: 'Gorra',
        age: 12,
        description: 'gorra',
        image: '',
    },
    {
        name: 'Libro electronico/kindle',
        age: 90,
        description: 'libro electronico',
        image: '',
    },
    {
        name: 'Tablet 2',
        age: 300,
        description: 'tablet 2',
        image: '',
    },
    {
        name: 'Tablet 3',
        age: 240,
        description: 'tablet 3',
        image: '',
    },
    {
        name: 'Libro 2',
        age: 17,
        description: 'tapa dura',
        image: '',
    },
];

const productDocuments = products.map(product => new Product(product));

const DB_URL = 'mongodb://localhost:27017/proyecto_final';

// En este caso, nos conectaremos de nuevo a nuestra base de datos
// pero nos desconectaremos tras insertar los documentos
mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
            // Utilizando Pet.find() obtendremos un array con todos los pets de la db
        const allProducts = await Product.find();
            
            // Si existen pets previamente, dropearemos la colección
        if (allProducts.length) {
        await Product.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
            // Una vez vaciada la db de las mascotas, usaremos el array petDocuments
            // para llenar nuestra base de datos con todas las mascotas.
            await Product.insertMany(productDocuments);
        })
    .catch((err) => console.log(`Error creating data: ${err}`))
        // Por último nos desconectaremos de la DB.
    .finally(() => mongoose.disconnect());