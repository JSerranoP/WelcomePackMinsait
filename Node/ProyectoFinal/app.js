require('dotenv').config();
require('./db');
require('./passport'); // Requerimos nuestro archivo de configuración
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
const PORT = process.env.PORT || 3000;

const router = express.Router();

const productsRoutes = require('./routes/product.routes')
const usersRoutes = require('./routes/index.routes')

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('*', (req, res, next) => {
    const error = new Error('Route not found'); 
    error.status = 404;
    next(error); // Lanzamos la función next() con un error
});

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

app.use('/', router);

app.use(
    session({
        secret: 'upgradehub_node', // ¡Este secreto tendremos que cambiarlo en producción!
        resave: false, // Solo guardará la sesión si hay cambios en ella.
        saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
        cookie: {
            maxAge: 3600000, // Milisegundos de duración de nuestra cookie, en este caso será una hora.
        },
        store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/proyecto_final'"}),
    })
);
app.use(passport.initialize())
app.use(passport.session());

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

app.listen(PORT, () => {
    console.log(`Listening in <http://localhost>:${PORT}`);
});