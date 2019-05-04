const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongoURI = 'mongodb://18.221.181.198:27017/airbnbDesc';
const auth = {
  user: '',
  password: ''
};
const db = mongoose.connect(mongoURI, {auth, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, autoIndex: false })
db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });

module.exports = db;
