const { validationResult } = require("express-validator");
const path = require("path");
//const User = require(path.resolve("./MODELOPRUEBA/User"));
const bcryptjs = require("bcryptjs");
const User = require("../../database/models/User");
const db = require (path.resolve ('./database/models'))


const usersController = {

  register: (req, res) => {
    res.render("./users/register");
  },
  create: async (req, res) => {
    const resultValidation = validationResult(req);
    //console.log(req.body)
    if (resultValidation.errors.length > 0) {
      return res.render("./users/register", {
        errors: resultValidation.mapped(),
        old: req.body,
      });
    }

  let userByEmailInDB = await db.User.findOne( {
    where: {
      email: req.body.email
    }
  });

    if (userByEmailInDB && userByEmailInDB.email === req.body.email) {
      return res.render("./users/register", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        },
        old: req.body,
      });
    }

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),

      //confirmPassword:bcryptjs.hashSync(req.body.confirmPassword, 10),
      image: "default.png"
    }
    delete userToCreate.confirmPassword
    console.log(req.body)
    if (req.file && req.file.filename) {
      userToCreate.image = req.file.filename;
    }
    if ( req.body && req.body.rememberMe == null) {
      userToCreate.rememberMe = 0
    } else {
      userToCreate.rememberMe = 1
    }
    let userCreated = db.User.create(userToCreate);
    return res.redirect("/users/userProfile");
  },
  edit: (req, res) => {},
  update: (req, res) => {},
  login: (req, res) => {
    let check = bcryptjs.compareSync('Federico1!', '$2a$10$8SvV3JY3ifV98FIX/sp.7.2qWe.8F5FciHc4gzBWxZ37DTqS5HMle')
    console.log(check)
    console.log(bcryptjs.decodeBase64('$2a$10$8SvV3JY3ifV98FIX/sp.7.2qWe.8F5FciHc4gzBWxZ37DTqS5HMle', 10))
    res.render("./users/login");
  },

  enterLogin: async (req, res) => {
    
    let userToLogin = await db.User.findOne( {
      where: {
        email: req.body.email
      }
    })

 
    if (userToLogin && userToLogin.email === req.body.email) {
      let isPasswordOk = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (isPasswordOk) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.rememberMe) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 2 });
        }
        return res.redirect("/users/userProfile");
      }
      return res.render("./users/login", {
        errors: {
          email: {
            msg: "Las credenciales son inválidas",
          },
        },
      });
    }
    return res.render("./users/login", {
      errors: {
        email: {
          msg: "El Email ingresado no se encuentra registrado",
        },
      },
    });
  },
  profile: (req, res) => {
    res.render("./users/userProfile", {
      user: req.session.userLogged,
    });
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
  admin: (req, res) => {
    res.render("./users/register");
  },
};

module.exports = usersController;
