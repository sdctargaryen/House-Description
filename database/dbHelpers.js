const Property = require('./');

getPropertyHelper = () => Property.find({}).limit(1)


module.exports = getPropertyHelper