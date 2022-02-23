const express = require('express');
require('./db.js');

const PORT = 3000;
const server = express();

const passport = require('passport');
require('./passport'); // Requerimos nuestro archivo de configuración

const petRoutes = require('./routes/pet.routes');
server.use('/pets', petRoutes);

const indexRoutes = require('./routes/index.routes');
server.use('/', indexRoutes);

const userRouter = require('./routes/user.routes');
server.use('/users', userRouter);

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const path = require('path');
const hbs = require('hbs');

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

hbs.registerHelper('uppercase', (str) => {
    return str.toUpperCase();
});

server.use(express.static(path.join(__dirname, 'public')));

const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


server.use(
    session({
        secret: 'upgradehub_node', // ¡Este secreto tendremos que cambiarlo en producción!
        resave: false, // Solo guardará la sesión si hay cambios en ella.
        saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
        cookie: {
            maxAge: 3600000, // Milisegundos de duración de nuestra cookie, en este caso será una hora.
        },
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

server.use(passport.initialize());
server.use(passport.session());

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