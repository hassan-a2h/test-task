const express = require('express');
const isValidEmail = require('./utilities/email_validator');

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'admin' },
  // Add more sample users as needed
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Get the server going');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;

  // Simple server-side validation for the email field
  if (!newUser || !newUser.email || !isValidEmail(newUser.email) || !newUser.name) {
    return res.status(400).json({ error: 'Invalid user data' });
  }

  newUser.id = users.length + 1;
  users.push(newUser);

  console.log('New user added:', newUser);
  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});