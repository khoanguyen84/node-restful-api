const { ASC, DESC, LIMIT } = require("../common/config")
const productModel = require("../models/productModel")

const getAllProduct = async (req, res) => {
    const { company, sort, order, page, limit } = req.query
    const queryObject = {}
    if (company) {
        queryObject.company = company
    }
    let fetchDataList = productModel.find(queryObject)
    if (sort) {
        let sortObject = sort?.split(',').reduce((obj, item, index) => {
            return {
                ...obj,
                [item]: order?.split(',').length ? order?.split(',')[index] == 'asc' ? ASC : DESC : ASC
            }
        }, {})
        fetchDataList = fetchDataList.sort(sortObject)
    }
    if (page) {
        let _page = Number(page)
        let skip = (_page - 1) * Number(limit ?? LIMIT)
        const productList = await productModel.find(queryObject)
        fetchDataList = fetchDataList.skip(skip).limit(limit ?? LIMIT)   
        let pagination = {
            page: _page,
            totalRow: productList?.length
        }
        const products = await fetchDataList
        res.status(200).json({ products, pagination })     
    }
    else{
        const products = await fetchDataList
        res.status(200).json({ products })
    }

}
const getProductById = async (req, res) => {
    res.status(200).json({ message: 'getProductById' })
}

module.exports = {
    getAllProduct,
    getProductById
}