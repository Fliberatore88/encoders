const {check} = require ('express-validator');

const usersRegister = [
  check('name').trim().notEmpty().withMessage('Debes completar el campo nombre').bail().isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
  check('lastname').trim().notEmpty().withMessage('Debes completar el campo apellido').bail().isString().withMessage('El apellido debe contener únicamente letras').bail().isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
  check('birthdate').isISO8601().toDate().withMessage('Se debe encontrar en formato fecha').isAfter(Date.now()),
  check('email').trim().notEmpty().withMessage('Debes completar el campo email').bail().isEmail().normalizeEmail().withMessage('Debe ser un email correcto'),
  check('username').isEmpty().withMessage('El nombre de usuario no puede estar vacío').bail().isString().withMessage('El usuario debe contener solo letras').bail().isLength({min: 8, max:20}).withMessage('El usuario debe tener al menos 8 caracteres y no más de 20'),
  check('password').trim().notEmpty().withMessage('Debes completar el campo password').bail().isLength({min: 8}).withMessage('La contraseña debe contener al menos 8 caracteres').matches('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$').withMessage('La contraseña debe contener al menos 8 caracteres, 1 mayúscula, 1 número,1 minúscula y un caracter especial.'),
  check('confirmPassword').isEmpty().withMessage('Debes completar el campo confirmar password').bail().custom((value, { req }) => {
    if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
        }
        return true
      })
]
const usersLogin = [
  check('username').trim().notEmpty().withMessage('Debes completar el campo username').bail().isLength({min: 3}).withMessage('El username debe tener al menos 3 caracteres'),
  check('password').trim().notEmpty().withMessage('Debes completar el campo password').bail().isLength({min: 8}).withMessage('La contraseña debe contener al menos 8 caracteres').matches('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$').withMessage('La contraseña debe contener al menos 8 caracteres, 1 mayúscula, 1 número,1 minúscula y un caracter especial.'),
]

module.exports = usersRegister,usersLogin;