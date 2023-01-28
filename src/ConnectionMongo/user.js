const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coopers');

const schema = new mongoose.Schema({
  email: String,
  password: String,
});

const model = mongoose.model('User', schema);

module.exports = model;
