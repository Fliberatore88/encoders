const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require ('./src/routes/mainRoutes');
const formsRoutes = require ('./src/routes/formsRoutes');
const productsRoutes = require ('./src/routes/productsRoutes')

app.use(express.static(path.join(__dirname, 'public')));


app.set ('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'));

app.use ('/', mainRoutes);
app.use ('/products', productsRoutes);
app.use ('/users', formsRoutes);


app.listen(3005, (err) => {
    if (err){
        console.log('Error al levantar el servidor', err)
    }else {
        console.log('Levantó el Server correctamente en el puerto 3005')
    }
})

module.exports = app;