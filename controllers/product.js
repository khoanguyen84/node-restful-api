const getAllProduct = async (req, res) => {
    res.status(200).json({message: 'getAllProduct'})
}
const getProductById = async (req, res) => {
    res.status(200).json({message: 'getProductById'})
}

module.exports = {
    getAllProduct,
    getProductById
}