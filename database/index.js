const mongoose = require('mongoose');
const propertySchema = require('./propertySchema.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/airbnbDesc', { useNewUrlParser: true })
  .then(()=>{console.log('connected to mongoDB')});

var Property = mongoose.model('Property', propertySchema);

module.exports = Property;