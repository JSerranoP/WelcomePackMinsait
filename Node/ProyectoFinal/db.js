const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/proyecto_final';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});