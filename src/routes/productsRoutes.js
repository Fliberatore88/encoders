const express = require ('express');
const router = express.Router();
const path = require('path')
const upload = require ('../../middlewares/multer')

const productsController = require (path.resolve('./src/controllers/productsController'));

router.get ('/', productsController.products)
router.get ('/detailProduct/:id/', productsController.detail)
router.get ('/car', productsController.car)
router.get ('/addProduct', productsController.addProduct)
router.post('/', upload.single('image'), productsController.store);
router.get ('/:id/editProduct', productsController.editProduct)
router.put('/:id', upload.single('image'), productsController.update);
router.delete('/:id', productsController.deletetProduct);

module.exports = router;