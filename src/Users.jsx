import usersData from './assets/users_data';
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();

  const removeUser = (index) => {
    usersData.splice(index, 1);

    console.log('User removed');
    navigate('/');
  };

  return (
    <>
      <Link to='new_user'>Sign up</Link>
      {
        usersData &&
        usersData.map((user, index) => {
          return(
            <div key={user.id}>
              <h3>User: {user.name}</h3>
              <h3>Email: {user.email}</h3>
              <p>User: {user.role}</p>
              <button onClick={() => removeUser(index)}>Remove</button>
              <hr />
            </div>
          )
        })
      }
    </>
  )
};

export default Users;