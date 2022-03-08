// Archivo seed.js
const mongoose = require('mongoose');

const User = require('./models/User');

const users = [
    {
        email: 'jserranop@minsait.com',
        password: 'asd',
        repeat_password: 'asd',
        name: 'Jorge',
        surname: 'Serrano',
        country: 'Espana',
        phone_number: '123456789',
    },
];

const userDocuments = users.map(user => new User(user));

const DB_URL = 'mongodb://localhost:27017/proyecto_final';

mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allUsers = await User.find();
        if (allUsers.length) {
            await User.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
            await User.insertMany(userDocuments);
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());