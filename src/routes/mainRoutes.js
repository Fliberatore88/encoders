const express = require ('express');
const router = express.Router();
const path = require('path')
const mainController = require (path.resolve('./src/controllers/mainController'));

router.get ('/', mainController.main);

module.exports = router;