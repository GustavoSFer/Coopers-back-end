const { modelUser } = require('../ConnectionMongo');


const login = async (email) => {
  const user = await modelUser.findOne({ email });
  
  return user;
};

const create = async (email, password) => {
  const user = await modelUser.create({ email, password });

  return user;
};

const getAll = async () => {
  const users = await modelUser.find();

  return users;
};

module.exports = {
  login,
  create,
  getAll,
}