const express = require ('express');
const router = express.Router();
const upload = require ('../../middlewares/multer')
const usersValidation = require ('../../middlewares/usersValidation')
const usersController = require ('../controllers/usersController')

/*** GET ALL USERS ***/
router.get ('/', usersController.index)

/*** LOGIN USER ***/

router.get ('/login',upload.single('image'),usersValidation, usersController.login)

/*** REGISTER USER ***/
router.get ('/register', usersController.register)
router.post ('register', upload.single('image'), usersValidation, usersController.create)

/*** GET ONE USER ***/
router.get('/:id/', usersController.detail);

/*** EDIT ONE USER ***/
router.get('/:id/edit', usersController.edit);
router.put('/:id', upload.single('image'), usersController.update);


router.get ('/admin', usersController.admin)


module.exports = router;