const mongoose = require('mongoose');
const propertySchema = require('./mongoSchema.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/airbnbDesc', { useNewUrlParser: true , useFindAndModify: false, useCreateIndex: true })
  .then(()=>{console.log('connected to mongoDB')});

// mongoose.set('useCreateIndex', true); 
// mongoose.set('useFindAndModify', false);

var Property = mongoose.model('housedescriptions', propertySchema);

module.exports = Property;

