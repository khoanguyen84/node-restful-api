const express = require('express')
const app = express()
const router = express.Router()
const connectDb = require('./database/db')
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Welcome RESTFul API')
})

const product_routes = require('./routes/productRouter')

/**
 * MiddleWare
 */
// router.route('/').get(async (req, res) => {
//     res.status(200).json({ message: 'get all student' })
// });

app.use('/api/products', product_routes);
// app.use('/api/students', router)

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URL)
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}
start()