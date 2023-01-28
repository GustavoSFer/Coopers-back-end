const model = require('../ConnectionMongo/user');


const login = async (email) => {
  const user = await model.findOne({ email });
  
  return user;
};

module.exports = {
  login,
}