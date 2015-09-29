var express = require('express')
var router = express.Router()
var moongoose = require('mongoose')

var bodyParser = require('body-parser')
router.use(bodyParser.json())

var Order = require('../models/order')
var Product = require('../models/product')

//INDEX
router.get('/', function(req, res){
  console.log('Data being requested from /orders')
    Order.find({}, function(err, orders){
    if(err) console.log(err)
    res.json(orders);
  })
})

//CREATE
router.post('/', function(req, res){
  console.log('Data being posted to /orders')
  var totalPrice = 0;
  for(i = 0; i < req.body.products.length; i++){
    Product.findById(req.body.products[i], function(err, product){
    if(err) console.log(err)
    totalPrice += product.price
    console.log(i + ' ' + totalPrice)
    // console.log(totalPrice)
    })
  }
})

//SHOW
router.get('/:id', function(req, res){
  console.log('Data being requested for ' + req.params.id + ' from /orders')
    Order.findById(req.params.id, function(err, order){
    if(err) console.log(err)
    res.json(order);
  })
})

//UPDATE
// router.put('/:id', function(req, res){
//   console.log('Update request for ' + req.params.id + ' from /products')
//   var data = req.body;
//   var alteredProduct = {}
//   if(data.name) alteredProduct.name = data.name
//   if(data.price) alteredProduct.price = data.price
//   if(data.description) alteredProduct.description = data.description

//   Product.findByIdAndUpdate(req.params.id, alteredProduct, {}, function(err, product){
//   if(err) console.log(err)
//   res.json(product);
//   })
// })

//DELETE
router.delete('/:id', function(req, res){
  console.log('Delete request for ' + req.params.id + ' from /orders')
    Order.findByIdAndRemove(req.params.id, function(err, order){
    if(err) console.log(err)
    res.json(order);
  })
})

module.exports = router