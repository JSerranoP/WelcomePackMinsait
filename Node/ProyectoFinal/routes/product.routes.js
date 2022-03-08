const express = require('express');

const Product = require('../models/Product');

const router = express.Router();

router.get('/:page', async (req, res, next) => {
    try {
        const page = req.params.page;
        const limit = 10;
        var currentPage = page;
        const products = await Product.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
        return res.status(200).render('products', { title: 'Todos los productos', products, currentPage });  
    } catch (err) {
        next(err);
    }
});

router.get('/id/:id', async (req, res, next) => {
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

router.post('/search', async (req, res, next) => {
    try {
        const search = req.body.search.charAt(0).toUpperCase() + req.body.search.slice(1);
        const products = await Product.find( {name: search});
        return res.status(200).render('products', { title: 'Productos que coinciden con su búsqueda', products });  
    } catch (err) {
        next(err);
    }
});

router.post('/filter', async (req, res, next) => {
    try {
        const lowest_price = req.body.lowest_price;
        const highest_price = req.body.highest_price;
        const products = await Product.find( {price: { $gte: lowest_price, $lte: highest_price}});
        return res.status(200).render('products', { title: 'Productos que coinciden con su búsqueda', products });  
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
        id, 
        { name: req.body.name }, 
        { new: true }
        );

        return res.status(200).json(updatedProduct);
    } catch (err) {
        next(err);
    }
});

module.exports = router;