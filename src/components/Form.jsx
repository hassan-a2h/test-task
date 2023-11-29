import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../assets/users_data';
import '../assets/styles.css';

const Form = () => {
  const navigate = useNavigate();


  // For
  //      Error
  //             Handling
  const [errors, setErrors] = useState({});


  // To add
  //        new User

  const addUser = async (e) => {
    e.preventDefault();

    // Access form data from the event object
    const { email, name, role } = e.target.form.elements;

    const newUser = {
      id: usersData.length + 1,
      email: email.value,
      name: name.value,
      role: role.value,
    };

    // Regex patterns for email and name validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]*$/;

    if (!newUser.email || !emailRegex.test(newUser.email)) {
      setErrors({
        email: 'Invalid email address',
      });
      return;
    }

    // Validate name
    if (!newUser.name || !nameRegex.test(newUser.name)) {
      setErrors({
        name: 'Invalid name',
      });
      return;
    }


    // Update the array
    usersData.push(newUser);
    console.log(usersData);

    // Navigate to root path
    navigate('/');
  };


  return (
    <div className='signup-form'>
      <h1>User signup</h1>

      <div>
        <form action="">
          {errors.email && <div className="error">{errors.email}</div>}
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="user@email.com" />
          <br />
          <br />

          {errors.name && <div className="error">{errors.name}</div>}
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Ahmad Adnan" />
          <br />
          <br />

          <label htmlFor="role">Role</label>
          <select name="role" id="role">
            <option value="user" selected>User</option>
            <option value="admin">Admin</option>
            <option value="mod">Mod</option>
          </select>
          <br />
          <br />
          <br />

          <button onClick={addUser} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;