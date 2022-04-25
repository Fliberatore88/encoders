const path = require ('path')
const modelsPath =  path.resolve ('database/models')
const models = require(modelsPath)
const bcryptjs = require ('bcryptjs')

const User = models.User


const createUsers = async (usersArray,) => { 
  for (let user of usersArray) {
    await User.create({
      name : user.name,
      password: bcryptjs.hashSync(user.password, 10),
      mail: user.mail
      
    })
  }
}
createUsers([datos de todo el array])