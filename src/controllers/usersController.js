const usersController = {
  index: (req,res) => {

  },
  register: (req,res) => {
    res.render('./users/register')
  },
  create: (req,res) => {

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