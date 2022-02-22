const express = require('express');

// Requerimos el archivo de configuración de nuestra DB
require('./db.js');

const PORT = 3000;
const server = express();

const Pet = require('./models/Pet');

const router = express.Router();

const petRoutes = require('./routes/pet.routes');
server.use('/pets', petRoutes);

const indexRoutes = require('./routes/index.routes');
server.use('/', indexRoutes);

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const path = require('path');
const hbs = require('hbs');

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

hbs.registerHelper('uppercase', (str) => {
    return str.toUpperCase();
});

// Crearemos un middleware para cuando no encontremos la ruta que busquemos
server.use('*', (req, res, next) => {
    const error = new Error('Route not found'); 
    error.status = 404;
    next(error); // Lanzamos la función next() con un error
});

// Si se lanza la función
server.use((err, req, res, next) => {
    return res.status(err.status || 500).render('error', {
        message: err.message || 'Unexpected error',
        status: err.status || 500,
    });
});

server.listen(PORT, () => {
    console.log(`Server running in <http://localhost>:${PORT}`);
});