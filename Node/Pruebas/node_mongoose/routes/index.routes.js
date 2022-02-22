const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).render('index', { title: 'Upgrade Hub - Handlebars Index' });
});

module.exports = router;