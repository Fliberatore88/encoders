const { validationResult } = require("express-validator")

const User = require ('../../MODELOPRUEBA/User')
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
  console.log(req.file)
    User.create(req.body)
    return res.send('OK se guardó el usuario')
  },
  detail: (req,res) => {

  },
  edit: (req,res) => {

  },
  update: (req,res) => {

  },
  login: (req,res) => {
    res.render('./users/login')
  },

  enterLogin: (req,res) => {

    const errors = validationResult(req)
    if (errors.isEmpty()){
      res.render('./users/login', {msg: 'Mensaje todo OK',old: req.body})
  } else {
      res.render('./users/login', {errors: errors.mapped(), old: req.body})
  }
    
  },
  admin: (req,res) => {
    res.render ('./users/register')
  }
}

module.exports = usersController;