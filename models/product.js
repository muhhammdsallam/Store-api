const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        trim:true,
        maxlength:[50,'Name can not be more than 50 characters'],

    },
    price:{
        type:Number,
        required:[true,'Price is required'],
        trim:true,
        maxlength:[50,'Price can not be more than 50 characters'],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type: String,
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:'{VALUE} is not a valid company'
        }}
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;