var mongoose = require('mongoose');

let propertySchema = new mongoose.Schema ({
  id: { type: Number, unique: true, dropDups: true },
  propertyInfo_propType: String,
  propertyInfo_title: String,
  propertyInfo_location: String,
  propertyInfo_numGuests: Number,
  beds_quantity: Number,
  amenities: {basic: Array, notIncluded: Array, iconUrl: Array},
  numBaths: Number,
  host_name: { type: String }, 
  host_pictureUrl: String,
  summary: Array
});
 
module.exports = propertySchema;