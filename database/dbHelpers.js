const Property = require('./');

getPropertyHelper = (num) => Property.find({}).limit(1).skip(num)
// getPropertyHelper = () => Property.findOne()
// getPropertyHelper = () => Property.find({})


module.exports = getPropertyHelper