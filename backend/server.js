const express = require('express');
const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'admin' },
  // Add more sample users as needed
];

app.get('/', (req, res) => {
  res.send('Get the server going');
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});