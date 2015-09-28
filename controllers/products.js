var express = require('express')
var router = express.Router()
var moongoose = require('mongoose')
moongoose.connect('mongodb://localhost/ecommerce')

var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

var Product = require('../models/product')

//INDEX
router.get('/', function(req, res){
  console.log('Data being requested from /products')
    Product.find({}, function(err, products){
    if(err) console.log(err)
    res.json(products);
  })
})


//CREATE
router.post('/', function(req, res){
  console.log('Data being posted to /products')
  var data = req.body;
  var newProduct = new Product({
    name: data.name,
    price: data.price,
    description: data.description
  })

  newProduct.save(function (err, product) {
    if(err) console.log(err);
    console.log('Product has been created!');
    res.json(product);
  });
})

//SHOW
router.get('/:id', function(req, res){
  console.log('Data being requested for ' + req.params.id + ' from /products')
    Product.find({_id: req.params.id}, function(err, product){
    if(err) console.log(err)
    res.json(product);
  })
})


module.exports = router