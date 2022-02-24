const express = require('express');

const Shelter = require('../models/Shelter');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const shelters = await Shelter.find().populate('pets');
        return res.status(200).json(shelters);
    } catch (err) {
        next(err);
    }
});

router.post('/create', async (req, res, next) => {
    try {
        const newshelter = new Shelter({
        name: req.body.name,
        location: req.body.location,
        });

        const createdShelter = await newshelter.save();
        return res.status(200).json(createdShelter);
    } catch (err) {
        next(err);
    }
});

router.put('/add-pet', async (req, res, next) => {
    try {
        const shelterId = req.body.shelterId;
        const petId = req.body.petId;

        const updatedShelter = await Shelter.findByIdAndUpdate(
        shelterId,
        { $push: { pets: petId } },
        { new: true }
        );

        return res.status(200).json(updatedShelter);
    } catch (err) {
        next(err);
    }
});

module.exports = router;