const service = require('../Service');

const getAll = async (_req, res) => {
  const list = await service.getAll();

  return res.status(200).json(list);
};

const postList = async (req, res) => {
  const { task, status } = req.body;
  const addTask = await service.postList(task, status);

  return res.status(201).json(addTask);
};

const updateTask = async (req, res) => {
  const { id, status } = req.body;
  const updatingTask = await service.updateTask(id, status);

  return res.status(200).json(updatingTask);
};


module.exports = {
  getAll,
  postList,
  updateTask,
};