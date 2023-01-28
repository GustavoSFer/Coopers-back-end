const userService = require('../Service/user');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const loginUser = await userService.login(email, password);
  if (user.code) return next(user)

  return res.status(200).json(loginUser);
};

module.exports = {
  login,
}