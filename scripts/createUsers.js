const path = require ('path')
const modelsPath =  path.resolve ('database/models')
const models = require(modelsPath)
const bcryptjs = require ('bcryptjs')

const User = models.User


const createUsers = async (usersArray) => { 
  for (let user of usersArray) {
    await User.create({
      id: user.id,
      name : user.name,
      lastname: user.lastname,
      password: bcryptjs.hashSync(user.password, 10),
      email: user.email,
      rememberMe: user.rememberme,
      image: user.image,
      CarritoId: user.CarritoId
      
    })
  }
}
createUsers([{
  id: 1,
  name: 'Juan',
  lastname: 'larola',
  password: 'Hola123',
  email: 'asd123@asd.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1
},
{
  id: 2,
  name: 'Pablo',
  lastname: 'Prueba',
  password: 'Hola1234',
  email: 'asd13@asd.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1    
},
{
  id: 3,
  name: 'Pedro',
  lastname: 'apellido',
  password: 'Chau123',
  email: 'pedro@pedro.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1
},
{
  id: 4,
  name: 'Juan Pablo',
  lastname: 'Profesor',
  password: 'Quetal5432',
  email: 'juampa@juanpa.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1    
},
{
  id: 5,
  name: 'Federico',
  lastname: 'Liberatore',
  password: 'Federico84',
  email: 'federico@liberatore.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1
},
{
  id: 6,
  name: 'Dary',
  lastname: 'Dary',
  password: 'Password1234',
  email: 'dary@dary.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1    
},
{
  id: 7,
  name: 'Blanca',
  lastname: 'Tovar',
  password: 'Blanca5432',
  email: 'blanca@blanca.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1
},
{
  id: 8,
  name: 'Maria',
  lastname: 'La del Barrio',
  password: 'Telenovela541',
  email: 'maria@ladelbarrio.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1    
},
{
  id: 9,
  name: 'Muñeca',
  lastname: 'Brava',
  password: 'Telenovela1234',
  email: 'muñeca@brava.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1
},
{
  id: 10,
  name: 'Maria',
  lastname: 'Castro',
  password: 'MariaCastro82',
  email: 'maria@castro.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1    
},
{
  id: 11,
  name: 'Guadalupe',
  lastname: 'Castro',
  password: 'RecienNacida8282',
  email: 'guadalupe@castro.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1
},
{
  id: 12,
  name: 'Melchor',
  lastname: 'Melchor',
  password: 'Reyesmagos15',
  email: 'reyes@magos.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1    
},
{
  id: 13,
  name: 'Baltazar',
  lastname: 'Baltazar',
  password: 'ReyesMagos14',
  email: 'baltazar@magos.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1
},
{
  id: 14,
  name: 'Gaspar',
  lastname: 'Gaspar',
  password: 'reyMago88',
  email: 'gaspar@magos.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1    
},
{
  id: 15,
  name: 'Papa',
  lastname: 'Noel',
  password: 'Polonorte899',
  email: 'barbudo@magico.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1
},
{
  id: 16,
  name: 'Juana',
  lastname: 'De arco',
  password: 'Francia8993',
  email: 'juana@juana.com',
  rememberMe: 0,
  image: 'default.png',
  CarritoId: 1    
},
{
  id: 17,
  name: 'Juan',
  lastname: 'Pravata',
  password: 'Profesor889',
  email: 'juan@pravata.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1
},
{
  id: 18,
  name: 'Palomo',
  lastname: 'Paloma',
  password: 'Cucurrucucu17',
  email: 'palomo@cucu.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1    
},
{
  id: 19,
  name: 'Olaf',
  lastname: 'El Nordico',
  password: 'Muniecodenieve1',
  email: 'olaf@nieve.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1
},
{
  id: 20,
  name: 'John',
  lastname: 'Snow',
  password: 'Crow8900',
  email: 'john@thecrow.com',
  rememberMe: 1,
  image: 'default.png',
  CarritoId: 1    
},
])