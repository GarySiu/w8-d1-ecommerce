var express = require('express')
var router = express.Router()
var moongoose = require('mongoose')

var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
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
// router.post('/', function(req, res){
//   console.log('Data being posted to /orders')
//   Product.find({_id: })

//   res.json(req.body)
// })

module.exports = router