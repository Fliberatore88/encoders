const express = require ('express');
const router = express.Router();
const productsController = require ('../controllers/productsController');

router.get ('/', productsController.detalle)
router.get ('/car', productsController.car)

module.exports = router;