const express = require ('express');
const router = express.Router();
const path = require('path')
const productsController = require (path.resolve('./src/controllers/productsController'));

router.get ('/', productsController.products)
router.get ('/detailProduct', productsController.detail)
router.get ('/car', productsController.car)
router.get ('/addProduct', productsController.addProduct)
router.get ('/editProduct', productsController.editProduct)

module.exports = router;