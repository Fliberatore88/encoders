const express = require ('express');
const router = express.Router();
const formsController = require ('../controllers/formsController')

router.get ('/login', formsController.login)
router.get ('/register', formsController.register)


module.exports = router;