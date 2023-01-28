const listModel = require('../Model');

const getAll = async () => {
  const list = await listModel.getAll();
  return list;
};

module.exports = {
  getAll,
};