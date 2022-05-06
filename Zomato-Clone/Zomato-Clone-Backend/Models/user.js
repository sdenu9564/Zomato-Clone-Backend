const mongoose = require('mongoose');
const validator =require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate:{
            validator:validator.isEmail,
            message: 'is not a valid email',
        }
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
});

module.exports = mongoose.model('user', userSchema);