const isValidEmail = require('./email_validator');

function addUser(request, response) {
  const newUser = request.body;

  // Simple server-side validation for the email field using regex
  if (!newUser || !newUser.email || !isValidEmail(newUser.email)) {
    return response.status(400).json({ error: 'Invalid user data' });
  }

  // Log the new user
  console.log('New user added:', newUser);

  response.json(newUser);
}

module.exports = addUser;