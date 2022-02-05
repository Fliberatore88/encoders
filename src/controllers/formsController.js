const formsController = {
  register: (req,res) => {
    res.render('./users/register')
  },
  login: (req,res) => {
    res.render ('./users/login')
  },
  admin: (req,res) => {
    res.render ('./users/register')
  }
}

module.exports = formsController;