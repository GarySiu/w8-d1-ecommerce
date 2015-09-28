var express = require('express');
var app = express();
var moongoose = require('mongoose')
moongoose.connect('mongodb://localhost/ecommerce')

//Routes
var productController = require ('./controllers/products');
app.use('/products', productController);

var userController = require ('./controllers/users');
app.use('/users', userController);

var orderController = require ('./controllers/orders');
app.use('/orders', orderController);

//Static pages
app.use(express.static(__dirname + '/public'));
app.listen(3000)