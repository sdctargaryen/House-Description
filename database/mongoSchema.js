const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  id: { type: Number, index: true, unique: true, dropDups: true },
  propertyInfo_propType: String,
  propertyInfo_title: String,
  propertyInfo_location: { type: String, index: true},
  propertyInfo_numGuests: { type: Number, index: true},
  beds_quantity: Number,
  amenities: {basic: Array, notIncluded: Array, iconUrl: Array},
  numBaths: Number,
  host_name: { type: String }, 
  host_pictureUrl: String,
  summary: Array
});

var Property = mongoose.model('housedescriptions', propertySchema);

module.exports = Property;
