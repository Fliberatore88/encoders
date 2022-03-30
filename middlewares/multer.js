const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage ( {
  destination: function (req, file, cb) {
    if (req.baseUrl =='/products') {
    cb(null, path.resolve('public/images/products')); 
    
  } else if (req.baseUrl == '/users'){
    cb(null, path.resolve('public/images/users'));
  }
  },
  filename: function (req, file, cb) {
    if (req.baseUrl =='/products') {
      cb(null,  req.body.name + '-' + file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      
    } else if (req.baseUrl == '/users'){
      cb(null,  req.body.username + '-' + file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  }
})


const upload = multer({ storage})

module.exports = upload;