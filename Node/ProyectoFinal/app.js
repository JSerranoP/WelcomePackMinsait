require('dotenv').config();
require('./db')
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const router = express.Router();

const productsRoutes = require('./routes/product.routes')

// Aquí tendremos los endpoints y rutas de las mascotas
app.use('/products', productsRoutes);

app.use('*', (req, res, next) => {
    const error = new Error('Route not found'); 
    error.status = 404;
    next(error); // Lanzamos la función next() con un error
});

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

app.use('/', router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Listening in <http://localhost>:${PORT}`);
});