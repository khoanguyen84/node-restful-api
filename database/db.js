
require('dotenv').config()
const mongoose = require('mongoose')

const connectDb = (uri) => {
    console.log('Db connecting');
    return mongoose.connect(uri)
}

module.exports = connectDb