const express = require('express');
const getUsers = require('./utilities/get_users');
const addUser = require('./utilities/add_user');

const app = express();
const PORT = 3000;

// Use default middleware to parse data
app.use(express.json());

// root route
app.get('/', (request, response) => {
  response.send('Get the server going');
});

// Endpoint to retrieve user data
app.get('/users', getUsers);

// Endpoint to add new user
app.post('/users', addUser);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});