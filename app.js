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

/*app.get ('/detalle-de-producto', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','productDetail.html'))
})

app.get ('/carrito-de-compras', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','productCar.html'))
})

app.get ('/registro', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','register.html'))
})

app.get ('/login', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','login.html'))
})*/



app.listen(3005, (err) => {
    if (err){
        console.log('Error al levantar el servidor', err)
    }else {
        console.log('Levantó el Server correctamente en el puerto 3005')
    }
})

module.exports = app;