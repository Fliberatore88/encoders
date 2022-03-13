const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride =  require('method-override');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const mainRoutes = require ('./src/routes/mainRoutes');
const usersRoutes = require ('./src/routes/usersRoutes');
const productsRoutes = require ('./src/routes/productsRoutes');
const session = require('express-session');


const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session ({ secret: 'encoders mensaje secreto' }))
app.use(cookieParser());
app.use(methodOverride('_method'))


app.set ('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'));

app.use ('/', mainRoutes);
app.use ('/products', productsRoutes);
app.use ('/users', usersRoutes);

app.use((req, res, next) => {
    res.status(404).render('errors/error404');
})

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3005, (err) => {
    if (err){
        console.log('Error al levantar el servidor', err)
    }else {
        console.log('Levantó el Server correctamente en el puerto 3005')
    }
})

module.exports = app;