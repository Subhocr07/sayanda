const bcrypt = require("bcrypt");

const saltRounds = 10;

function hashPassword(password) {
  //to avoid asyncwait we can use also sync function
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

module.exports = hashPassword;
