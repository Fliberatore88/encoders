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
    res.render ('./users/login')
  },
  admin: (req,res) => {
    res.render ('./users/register')
  }
}

module.exports = usersController;