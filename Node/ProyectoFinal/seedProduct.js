// Archivo seed.js
const mongoose = require('mongoose');

const Product = require('./models/Product');

const products = [
    {
        name: 'Tablet',
        price: 120,
        description: 'small tablet',
        image: '',
    },
    {
        name: 'Smarthphone',
        price: 500,
        description: 'mobile phone',
        image: '',
    },
    {
        name: 'Television',
        price: 1300,
        description: 'TV',
        image: '',
    },
    {
        name: 'Libro',
        price: 30,
        description: 'tapa blanda',
        image: '',
    },
    {
        name: 'Fifa 2022',
        price: 60,
        description: 'videojuego ps4',
        image: '',
    },
    {
        name: 'Pokemon',
        price: 50,
        description: 'videojuego nintendo switch',
        image: '',
    },
    {
        name: 'Auriculares',
        price: 120,
        description: 'auriculares',
        image: '',
    },
    {
        name: 'Nintendo switch',
        price: 340,
        description: 'consola',
        image: '',
    },
    {
        name: 'Guitarra',
        price: 60,
        description: 'guitarra',
        image: '',
    },
    {
        name: 'Guitarra electrica',
        price: 70,
        description: 'guitarra electrica',
        image: '',
    },
    {
        name: 'Memoria USB',
        price: 25,
        description: 'memoria usb 128gb',
        image: '',
    },
    {
        name: 'Cuerdas de guitarra',
        price: 10,
        description: 'cuerda de guitarra',
        image: '',
    },
    {
        name: 'Gafas VR',
        price: 530,
        description: 'gafas de realidad virtual',
        image: '',
    },
    {
        name: 'Raton ordenador',
        price: 15,
        description: 'raton para ordenador',
        image: '',
    },
    {
        name: 'Impresora',
        price: 70,
        description: 'impresora',
        image: '',
    },
    {
        name: 'Zapatillas',
        price: 30,
        description: 'zapatillas de correr',
        image: '',
    },
    {
        name: 'Gorra',
        price: 12,
        description: 'gorra',
        image: '',
    },
    {
        name: 'Libro electronico/kindle',
        price: 90,
        description: 'libro electronico',
        image: '',
    },
    {
        name: 'Tablet 2',
        price: 300,
        description: 'tablet 2',
        image: '',
    },
    {
        name: 'Tablet 3',
        price: 240,
        description: 'tablet 3',
        image: '',
    },
    {
        name: 'Libro 2',
        price: 17,
        description: 'tapa dura',
        image: '',
    },
];

const productDocuments = products.map(product => new Product(product));

const DB_URL = 'mongodb://localhost:27017/proyecto_final';

mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allProducts = await Product.find();
            
        if (allProducts.length) {
            await Product.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
            await Product.insertMany(productDocuments);
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());