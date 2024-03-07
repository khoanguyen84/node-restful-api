const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name must be provided']
    },
    price: {
        type: Number,
        required: [true, 'price must be provided']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        enum: {
            values: ['apple', "samsung", "dell", "mi"],
            message: `{VALUE} is not supported`
        }
    }
})

module.exports = mongoose.model('Product', productSchema)