const express = require ('express');
const router = express.Router();
const upload = require ('../../middlewares/multer')
const usersValidation = require ('../../middlewares/usersValidation')
const usersController = require ('../controllers/usersController')

/*** LOGIN USER ***/

router.get ('/login', usersController.login)
router.post ('/login', usersValidation, usersController.enterLogin)

/*** REGISTER USER ***/
router.get ('/register', usersController.register)
router.post ('/register', upload.single('avatar'), usersValidation, usersController.create)

/*** GET ONE USER ***/
router.get('/:id/', usersController.profile);

/*** EDIT ONE USER ***/
router.get('/:id/edit', usersController.edit);
router.put('/:id', upload.single('avatar'), usersController.update);


router.get ('/admin', usersController.admin)


module.exports = router;