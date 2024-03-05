const express = require('express')
const router = express.Router()
const {getAllProduct, getProductById} = require('../controllers/product')

router.route('/').get(getAllProduct)
router.route('/id').get(getProductById)

module.exports = router