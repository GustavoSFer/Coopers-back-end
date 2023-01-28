const listModel = require('../Model');

const getAll = async () => {
  const list = await listModel.getAll();
  return list;
};

const getStatus = async (status) => {
  const list = await listModel.getStatus(status);
  return list;
};

const postList = async (task, status) => {
  const addTask = await listModel.postList(task, status);
  return addTask;
};

const updateTask = async (id, status) => {
  const updatingTask = await listModel.updateTask(id, status);
  return updatingTask;
};

const remove = async (id) => {
  const removeTask = await listModel.remove(id);

  return removeTask;
};

module.exports = {
  getAll,
  getStatus,
  postList,
  updateTask,
  remove,
};