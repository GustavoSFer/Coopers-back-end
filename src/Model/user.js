const model = require('../ConnectionMongo/user');


const login = async (email) => {
  const user = await model.findOne({ email });
  
  return user;
};

const create = async (email, password) => {
  const user = await model.create({ email, password });

  return user;
};

module.exports = {
  login,
  create,
}