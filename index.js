var express = require('express')
var app = express()
var moongoose = require('mongoose')
moongoose.connect('mongodb://localhost/ecommerce')

//Routes
app.use('/products', require('./controllers/products'))
app.use('/users', require('./controllers/users'))
app.use('/orders', require('./controllers/orders'))

//Static pages
app.use(express.static(__dirname + '/public'))
app.listen(3000)