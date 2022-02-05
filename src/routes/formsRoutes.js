const express = require ('express');
const router = express.Router();
const formsController = require ('../controllers/formsController')

router.get ('/login', formsController.login)
router.get ('/register', formsController.register)
router.get ('/admin', formsController.admin)


module.exports = router;