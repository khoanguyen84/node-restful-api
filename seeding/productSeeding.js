require('dotenv').config()
const connectDb = require("../database/db");
const productModel = require('../models/productModel');

const seedingProducts = async () => {
    try {
        await connectDb(process.env.MONGODB_URL)
        await productModel.deleteMany()
        await productModel.create([
            {
                "name" : 'iPhone',
                "price": 154,
                "featured": true,
                "company" : "apple"
            },
            {
                "name" : 'iPhone X',
                "price": 1154,
                "featured": true,
                "company" : "apple"
            },
            {
                "name" : 'watch',
                "price": 204,
                "featured": true,
                "company" : "apple"
            },
            {
                "name" : 'watch 10',
                "price": 304,
                "company" : "apple"
            },
            {
                "name" : 's20',
                "price": 404,
                "company" : "samsung"
            },
            {
                "name" : 'dell gaming',
                "price": 511,
                "company" : "samsung"
            },
            {
                "name" : 'mi20',
                "price": 701,
                "company" : "mi"
            }
        ])
        console.log('Seeding Product data success');
    } catch (error) {
        console.log(error);
    }
}
seedingProducts()