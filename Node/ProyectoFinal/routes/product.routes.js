const express = require('express');

const Product = require('../models/Product');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).render('products', { title: 'Upgrade products', products });  
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
            
        return res
        .status(200)
        .render('product', { title: 'Upgrade single product', product: product, id: id });  
    } catch (err) {
        next(err);
    }
});

router.post('/create', async (req, res, next) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
        });
        const createdProduct = await newProduct.save();
        return res.status(200).json(createdProduct);
    } catch (err) {
        next(err);
    }
});

router.put('/edit', async (req, res, next) => {
    try {
        const id = req.body.id;

        const updatedProduct = await Product.findByIdAndUpdate(
        id, // La id para encontrar el documento a actualizar
        { name: req.body.name }, // Campos que actualizaremos
        { new: true } // Usando esta opción, conseguiremos el documento actualizado cuando se complete el update
        );

        return res.status(200).json(updatedProduct);
    } catch (err) {
        next(err);
    }
});

module.exports = router;