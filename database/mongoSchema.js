var mongoose = require('mongoose');

let propertySchema = new mongoose.Schema ({
  id: { type: Number, unique: true, dropDups: true },
  propertyInfo: {propType: String, title: String, location: String, numGuests: Number},
  beds: {quantity: Number},
  amenities: {basic: Array, notIncluded: Array, iconUrl: Array},
  numBaths: Number,
  host: { name: String, pictureUrl: String },
  summary: Array // or String
});
 
module.exports = propertySchema;