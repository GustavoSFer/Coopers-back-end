const service = require('../Service');

const getAll = async (_req, res) => {
  const list = await service.getAll();

  return res.status(200).json(list);
};


module.exports = {
  getAll,
};