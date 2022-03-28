const { validationResult } = require("express-validator")
const path = require('path')
const User = require (path.resolve('./MODELOPRUEBA/User'))
const bcryptjs = require ('bcryptjs')
const usersController = {
  index: (req,res) => {

  },
  register: (req,res) => {
    res.render('./users/register')
  },
  create: (req,res) => {
    
  const resultValidation = validationResult(req)
  console.log(req.file)
  if (resultValidation.errors.length > 0 ){
    return res.render('./users/register', { errors: resultValidation.mapped(), old: req.body })
  }
  
    let userByEmailInDB = User.findByField('email', req.body.email);
    //let userByUsernameDB = User.findByField('username', req.body.username);

      if  (userByEmailInDB) {
        return res.render('./users/register', { errors:{
          email: {
            msg: 'Este email ya está registrado'
          },
          username: {
            msg: 'Este username ya está registrado'
          }
        }, old: req.body })
      }
   
      if  (req.file && req.file.filename) {
    let userToCreate =  {
    ...req.body,
    password: bcryptjs.hashSync(req.body.password, 10),
    image: req.file.filename,
  }
  let userCreated = User.create(userToCreate)
  return res.redirect('/users/login')
} else {
  let userToCreate =  {
    ...req.body,
    password: bcryptjs.hashSync(req.body.password, 10),
    image: 'default.png',
  }
  let userCreated = User.create(userToCreate)
  return res.redirect('/users/login')
}
   
  },
  edit: (req,res) => {

  },
  update: (req,res) => {

  },
  login: (req,res) => {
     
    res.render('./users/login')
  },

  enterLogin: (req,res) => {
      let userToLogin = User.findByField('email', req.body.email)

    if(userToLogin) {
      let isPasswordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
      if (isPasswordOk){ 
        delete userToLogin.password
        req.session.userLogged = userToLogin;

        if (req.body.remember_me) {
          res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
        }
        return res.redirect('/users/userProfile')
      }
      return res.render('./users/login', { errors: {
        email: {
          msg: 'Las credenciales son inválidas'
        }
      }
  
      })
    }
    return res.render('./users/login', { errors: {
      email: {
        msg: 'El Email ingresado no se encuentra registrado'
      }
    }

    })
  },
  profile: (req,res) => {
    console.log(req.cookies.userEmail)
    res.render('./users/userProfile',  {
      user: req.session.userLogged
    })
  },
  logout: (req,res) => {
    res.clearCookie('userEmail')
      req.session.destroy();
      return res.redirect('/');
  },
  admin: (req,res) => {
    res.render ('./users/register')
  }
}

module.exports = usersController;