const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coopers');

const schema = new mongoose.Schema({
  task: String,
  status: String,
  date: Date,
  updateDate: Date,
});

const model = mongoose.model('List', schema);

module.exports = model;
