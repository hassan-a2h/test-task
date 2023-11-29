const users = require('../../src/assets/users.cjs');

function getUsers(req, res) {
  res.json(users);
}

module.exports = getUsers;