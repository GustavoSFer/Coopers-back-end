const model = require('../ConnectionMongo');

const getAll = async () => {
  const list = await model.find();

  return list;
};

const postList = async (task, status) => {
  const addTask = await model.create({ task, status, date: new Date() });

  return addTask;
};

const updateTask = async (id, status) => {
  const updatingTask = await model.updateOne({ _id: id }, { status, updateDate: new Date() });
  return updatingTask;
};

module.exports = {
  getAll,
  postList,
  updateTask,
};