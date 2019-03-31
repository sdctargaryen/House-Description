const Property = require('./');

getPropertyHelper = () => Property.find({}).limit(1)
// getPropertyHelper = () => Property.findOne()


module.exports = getPropertyHelper