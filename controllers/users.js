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

//SHOW
router.get('/:id', function(req, res){
  console.log('Data being requested for ' + req.params.id + ' from /users')
    User.findById(req.params.id, function(err, user){
    if(err) console.log(err)
    res.json(user);
  })
})

//UPDATE
router.put('/:id', function(req, res){
  console.log('Update request for ' + req.params.id + ' from /users')
  var data = req.body;
  var alteredUser = {}
  if(data.name) alteredUser.name = data.name
  if(data.gender) alteredUser.gender = data.gender
  if(data.dob) alteredUser.dob = data.dob

  User.findByIdAndUpdate(req.params.id, alteredUser, {}, function(err, user){
  if(err) console.log(err)
  res.json(user);
  })
})

//DELETE
router.delete('/:id', function(req, res){
  console.log('Delete request for ' + req.params.id + ' from /users')
    User.findByIdAndRemove(req.params.id, function(err, user){
    if(err) console.log(err)
    res.json(user);
  })
})

module.exports = router