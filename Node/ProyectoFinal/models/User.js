const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        repeat_password: { type: String, required: true },
        name: { type: String, required: true },
        surname: { type: String, required: true },
        country: { type: String, required: true },
        phone_number: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;