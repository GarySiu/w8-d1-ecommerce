var express = require('express')
var router = express.Router()
var moongoose = require('mongoose')

var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

module.exports = router