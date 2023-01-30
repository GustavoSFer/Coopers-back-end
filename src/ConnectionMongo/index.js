const mongoose = require('mongoose');
require('dotenv').config();

const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/coopers';

mongoose.connect(dbUri);

const schema = new mongoose.Schema({
  task: String,
  status: String,
  date: Date,
  updateDate: Date,
});

const model = mongoose.model('List', schema);

module.exports = model;
