var express = require('express')
var router = express.Router()
var moongoose = require('mongoose')
var bodyParser = require('body-parser')
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
    Product.findById(req.params.id, function(err, product){
    if(err) console.log(err)
    res.json(product);
  })
})

//UPDATE
router.put('/:id', function(req, res){
  console.log('Update request for ' + req.params.id + ' from /products')
  var data = req.body;
  var changes = {}
  //only add attributes that exist in the request to the changes object
  if(data.name) changes.name = data.name
  if(data.price) changes.price = data.price
  if(data.description) changes.description = data.description
  Product.findByIdAndUpdate(req.params.id, changes, {}, function(err, product){
  if(err) console.log(err)
  res.json(product);
  })
})

//DELETE
router.delete('/:id', function(req, res){
  console.log('Delete request for ' + req.params.id + ' from /products')
    Product.findByIdAndRemove(req.params.id, function(err, product){
    if(err) console.log(err)
    res.json(product);
  })
})

module.exports = router