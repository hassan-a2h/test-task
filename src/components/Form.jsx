import { useNavigate } from 'react-router-dom';
import usersData from '../assets/users_data';

const Form = () => {
  const navigate = useNavigate();

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

    // Update the array
    usersData.push(newUser);
    console.log(usersData);

    // Navigate to root path
    navigate('/');
  };


  return (
    <>
      <h1>User signup</h1>

      <div>
        <form action="">
          <label htmlFor="email">Email</label> <br />
          <input type="email" name="email" id="email" placeholder="user@email.com" />
          <br />
          <br />

          <label htmlFor="name">Name</label> <br />
          <input id="name" name="name" type="text" placeholder="Ahmad Adnan" />
          <br />
          <br />

          <label htmlFor="role">Role</label> <br />
          <select name="role" id="role">
            <option value="user" selected>User</option>
            <option value="admin">Admin</option>
            <option value="mod">Mod</option>
          </select>
          <br />
          <br />

          <button onClick={addUser} type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;