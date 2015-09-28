var mongoose = require('mongoose');
var User = mongoose.model('User')


var orderSchema = new mongoose.Schema({
  price: String,
  createdAt: Date,
  address: {
    street: String,
    postcode: String,
    town: String,
    country: String
  },
  products: [{type: mongoose.Schema.ObjectId, ref: 'Product'}],
  user: [User.schema]
})

var Order = mongoose.model('Order', orderSchema)

module.exports = Order;