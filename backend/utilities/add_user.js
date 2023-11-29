const isValidEmail = require('./email_validator');

function addUser(req, res) {
  const newUser = req.body;

  // Simple server-side validation for the email field using regex
  if (!newUser || !newUser.email || !isValidEmail(newUser.email)) {
    return res.status(400).json({ error: 'Invalid user data' });
  }

  // Log the new user
  console.log('New user added:', newUser);

  res.json(newUser);
}

module.exports = addUser;