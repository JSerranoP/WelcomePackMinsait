require('./db.js');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const authMiddleware = require('./middlewares/auth.middleware');

const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('./passport');

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    session({
        secret: 'upgradehub_node',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 3600000,
        },
        store: new MongoStore({ 
            mongooseConnection: mongoose.connection,
            collection: 'sessions' 
        }),
    })
);

app.use(passport.initialize());
app.use(passport.session());

const productRoutes = require('./routes/product.routes');
const indexRoutes = require('./routes/index.routes');
const userRouter = require('./routes/user.routes');
const cartRouter = require('./routes/cart.routes');
app.use('/', indexRoutes);
app.use('/products', [authMiddleware.isAuthenticated], productRoutes);
app.use('/users', userRouter);
app.use('/cart', cartRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use('*', (req, res, next) => {
    const error = new Error('Route not found'); 
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    return res.status(err.status || 500).render('error', {
        message: err.message || 'Unexpected error',
        status: err.status || 500,
    });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerHelper('nextPage', (num) => {
    return num +++ 1;
});

hbs.registerHelper('prevPage', (num) => {
    return num - 1;
});

app.listen(PORT, () => {
    console.log(`Server running in <http://localhost>:${PORT}`);
});