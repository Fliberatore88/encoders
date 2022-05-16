const express = require('express');

const router = express.Router();

const productsAPIController = require('../../controllers/apis/productstApisController');

//Rutas
//Listado de productos
router.get('/', productsAPIController.list);
//Detalle de productos
router.get('/:id', productsAPIController.detail);



module.exports = router;