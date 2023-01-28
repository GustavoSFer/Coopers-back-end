const validationPost = (req, _res, next) => {
  const { task, status } = req.body;
  if (!task) return next({ code: 400, message: 'Favor informar a mensagem da tarefa' });
  if (!status) return next({ code: 400, message: 'Favor informar o status da tarefa' });
  return next();
};

const validationPut = (req, _res, next) => {
  const { status } = req.body;
  if (!status) return next({ code: 400, message: 'Favor informar o status da tarefa' });
  return next();
};

module.exports = {
  validationPost,
  validationPut,
};