var express = require('express')
var router = express.Router()
var moongoose = require('mongoose')

var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

var User = require('../models/user')

//INDEX
router.get('/', function(req, res){
  console.log('Data being requested from /users')
    User.find({}, function(err, users){
    if(err) console.log(err)
    res.json(users);
  })
})

//CREATE
router.post('/', function(req, res){
  console.log('Data being posted to /users')
  var data = req.body;
  var newUser = new User({
    name: data.name,
    gender: data.gender,
    dob: data.dob
  })

  newUser.save(function (err, user) {
    if(err) console.log(err);
    console.log('User has been created!');
    res.json(user);
  });
})

// //SHOW
// router.get('/:id', function(req, res){
//   console.log('Data being requested for ' + req.params.id + ' from /products')
//     Product.findById(req.params.id, function(err, product){
//     if(err) console.log(err)
//     res.json(product);
//   })
// })

// //UPDATE
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

// //DELETE
// router.delete('/:id', function(req, res){
//   console.log('Delete request for ' + req.params.id + ' from /products')
//     Product.findByIdAndRemove(req.params.id, function(err, product){
//     if(err) console.log(err)
//     res.json(product);
//   })
// })

module.exports = router