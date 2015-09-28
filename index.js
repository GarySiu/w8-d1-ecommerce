var express = require('express');
var path = require('path');
var app = express();
var moongoose = require('mongoose')
moongoose.connect('mongodb://localhost/ecommerce')


var productController = require ('./controllers/products');
app.use('/products', productController);

var userController = require ('./controllers/users');
app.use('/users', userController);

app.use(express.static(__dirname + '/public'));
app.listen(3000)