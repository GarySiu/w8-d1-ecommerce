var express = require('express');
var path = require('path');
var app = express();

var productController = require ('./controllers/products');
app.use('/products', productController);

app.use(express.static(__dirname + '/public'));
app.listen(3000)