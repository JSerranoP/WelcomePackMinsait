const express = require('express');
require('./db.js');
const passport = require('passport');
require('./passport'); // Requerimos nuestro archivo de configuración
const productRoutes = require('./routes/product.routes');
const indexRoutes = require('./routes/index.routes');
const userRouter = require('./routes/user.routes');
const path = require('path');
const hbs = require('hbs');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.use('/users', userRouter);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerHelper('uppercase', (str) => {
    return str.toUpperCase();
});

app.use(
    session({
        secret: 'upgradehub_node', // ¡Este secreto tendremos que cambiarlo en producción!
        resave: false, // Solo guardará la sesión si hay cambios en ella.
        saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
        cookie: {
            maxAge: 3600000, // Milisegundos de duración de nuestra cookie, en este caso será una hora.
        },
        store: new MongoStore({ 
            mongooseConnection: mongoose.connection,
            collection: 'sessions' 
        }),
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Crearemos un middleware para cuando no encontremos la ruta que busquemos
app.use('*', (req, res, next) => {
    const error = new Error('Route not found'); 
    error.status = 404;
    next(error); // Lanzamos la función next() con un error
});

// Si se lanza la función
app.use((err, req, res, next) => {
    return res.status(err.status || 500).render('error', {
        message: err.message || 'Unexpected error',
        status: err.status || 500,
    });
});

app.listen(PORT, () => {
    console.log(`Server running in <http://localhost>:${PORT}`);
});