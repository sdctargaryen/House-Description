var mongoose = require('mongoose');

let propertySchema = new mongoose.Schema ({
  id: { type: Number },
  propertyInfo: {propType: String, title: String, location: String, numGuests: Number},
  beds: {quantity: Number, bedType: Array, iconUrl: Array},
  amenities: {basic: Array, notIncluded: Array, iconUrl: Array},
  numBaths: Number,
  host: { name: String, pictureUrl: String },
  summary: Array // or String
});
 
module.exports = propertySchema;