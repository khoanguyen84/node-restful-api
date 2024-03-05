const express = require('express')
const app = express()
const router = express.Router()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Welcome RESTFul API')
})

const product_routes = require('./routes/product')

/**
 * MiddleWare
 */
router.route('/').get(async (req, res) => {
    res.status(200).json({ message: 'get all student' })
});

app.use('/api/product', product_routes);
app.use('/api/student', router)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}
start()