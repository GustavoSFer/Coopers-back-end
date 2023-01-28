const modelUser = require('../Model/user');

const login = (email, password) => {
  const hashPassword = md5(password);
  const user = await modelUser.login(email);
  if (user == null) return { code: 404, message: "user not exist" };

  if (user.password !== hashPassword) {
    return { code: 404, message: "Incorrect E-mail or password" };
  };

  delete user._doc.password;
  const token = generateToken({ user });

  return { ...user._doc, token};
};

module.exports = {
  login,
}