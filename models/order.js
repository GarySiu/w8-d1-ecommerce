var mongoose = require('mongoose');
var User = mongoose.model('User')


var orderSchema = new mongoose.Schema({
  price: String,
  createdAt: Date.now(),
  address: {
    street: String,
    postcode: String,
    town: String,
    country: String
  },
  products: [{type: mongoose.Schema.ObjectId, ref: 'Product'}],
  user: User.schema
})

var Order = mongoose.model('Order', orderSchema)

module.exports = Order;
// Price(String)
// CreatedAt(Date)
// Adress(Object)
// Street(String)
// Postcode(String)
// Town(String)
// Country(String)
// Products(Array of Product references)
// User(Embedded User)