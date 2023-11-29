const users = require('../../src/assets/users.cjs');

function getUsers(request, response) {
  response.json(users);
}

module.exports = getUsers;