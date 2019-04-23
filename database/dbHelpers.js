const Property = require('./mongo.js');

get = (num) => Property.findOne().where({id: num});

del = (num) => Property.deleteOne().where({id: num});

post = (data) => Property.insertMany(data);

getAll = () => Property.find({}).limit(100);

delAll = () => Property.deleteMany({ __v: 0 })



module.exports = {get, getAll, delAll, del, post}