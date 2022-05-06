const { ObjectId } = require('bson');
const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const itemSchema = new Schema({
    _id:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    description:{
        type:Array,
        required:true
    },
    restaurantId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    qty:{
        type:Number,
        required:true

    }
});

module.exports = mongoose.model('item', itemSchema);
