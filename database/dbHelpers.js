const Property = require('./mongo.js');

getPropertyHelper = (num) => Property.find({}).limit(1).skip(num);

getPropertyAll = () => Property.find({}).limit(100);

deletePropertyAll = () => Property.deleteMany({ __v: 0 })



module.exports = {getPropertyHelper, getPropertyAll, deletePropertyAll}