const express = require ('express');
const router = express.Router();
const path = require('path')
const upload = require (path.resolve('./middlewares/multer'))
const usersValidation = require (path.resolve('./middlewares/usersValidation'))
const usersController = require (path.resolve('./src/controllers/usersController'))
const guestMiddleware = require (path.resolve('./middlewares/guestMiddleware'))
const authMiddleware = require (path.resolve('./middlewares/authMiddleware'))

/*** LOGIN USER ***/
router.get('/logout', usersController.logout)

router.get ('/login', guestMiddleware, usersController.login)
router.post ('/login', usersValidation, usersController.enterLogin)

/*** REGISTER USER ***/
router.get ('/register',guestMiddleware, usersController.register)
router.post ('/register', upload.single('avatar'), usersValidation, usersController.create)

router.get('/userProfile/', authMiddleware, usersController.profile)
/*** GET ONE USER ***/
router.get('/:id/', usersController.profile);

/*** EDIT ONE USER ***/
router.get('/:id/edit', usersController.edit);
router.put('/:id', upload.single('avatar'), usersController.update);



router.get ('/admin', usersController.admin)


module.exports = router;