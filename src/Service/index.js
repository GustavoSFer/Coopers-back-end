const listModel = require('../Model');

const getAll = async () => {
  const list = await listModel.getAll();
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

module.exports = {
  getAll,
  postList,
  updateTask,
};