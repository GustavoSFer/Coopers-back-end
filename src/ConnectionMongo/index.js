const mongoose = require('mongoose');
require('dotenv').config();

const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/coopers';

mongoose.connect(dbUri);

const schema = new mongoose.Schema({
  task: String,
  status: String,
  date: Date,
  updateDate: Date,
  email: String,
  password: String,
});

const schemaUser = new mongoose.Schema({
  email: String,
  password: String,
});

const model = mongoose.model('List', schema);
const modelUser = mongoose.model('User', schema);

module.exports = {
  model,
  modelUser,
};
