const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type : Number,
        required: true,
        min : 0
    },
    order : {
        type: String,
        lowercase: true,
    },
    additional : {
        type: String
    },
    quantity : {
        type: Number
    },
    orderdate: {
        type: Date
    },
    address: {
        type: String
    },
    message:{
        type: String
    }
})
const Order = mongoose.model('Order', productSchema)

//exporting the Product
module.exports = Order;