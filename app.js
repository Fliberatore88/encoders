const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use (express.static(publicPath) );

app.get ('/', (req,res) => {
    res.sendFile (path.resolve (__dirname, 'views', 'index.html'));
})

app.get ('/detalle-de-producto', (req,res) => {
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
})



app.listen(3005, (err) => {
    if (err){
        console.log('Error al levantar el servidor', err)
    }else {
        console.log('Levantó el Server correctamente')
    }
})