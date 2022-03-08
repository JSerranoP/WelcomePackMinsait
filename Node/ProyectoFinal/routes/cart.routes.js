const express = require('express');

const Cart = require('../models/Cart');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const userId = req.session.passport.user;
        const carts = await Cart.find( {userId: userId} ).populate('products');
        cartProducts = carts[0].products;

        return res.status(200).render('cart', { cartProducts });  
    } catch (err) {
        next(err);
    }
});

router.post('/create', async (req, res, next) => {
    try {
        const newCart = new Cart({
            userId: req.body.userId,
        });

        const createdCart = await newCart.save();
        return res.status(200).json(createdCart);
    } catch (err) {
        next(err);
    }
});

router.post('/add-product/:productId', async (req, res, next) => {
    try {
        const userId = req.session.passport.user;
        const productId = req.params.productId;

        const updatedCart = await Cart.findOneAndUpdate( {userId: userId},
            { $push: { products: productId } },
            { new: true }
        );

        return res.status(200).render('product-cart');
    } catch (err) {
        next(err);
    }
});

module.exports = router;