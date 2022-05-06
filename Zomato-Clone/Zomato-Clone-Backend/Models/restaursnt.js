const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { stringify } = require('uuid');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    },
    city: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    thumb: {
        type: Array,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact_number: {
        type: String,
        required: true
    },
    mealtype:{
        type:String,
        required:true
    },
    Cuisine:{
        type:Array,
        required:true

    },
    image:{
        type:String,
        required:true
    },
    location_id:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('restaurant', restaurantSchema);