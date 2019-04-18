const Property = require('./index.js');

getPropertyHelper = (num) => Property.find({}).limit(1).skip(num);

getPropertyAll = () => Property.find({})

deletePropertyAll = () => Property.deleteMany({ __v: 0 })



module.exports = {getPropertyHelper, getPropertyAll, deletePropertyAll}