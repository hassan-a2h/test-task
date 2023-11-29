import usersData from './assets/users_data';
import { Link, useNavigate } from 'react-router-dom';
import './assets/styles.css';

const Users = () => {
  const navigate = useNavigate();

  const removeUser = (index) => {
    usersData.splice(index, 1);

    console.log('User removed');
    navigate('/');
  };

  return (
    <div className='main-container'>
      <div className='new-user'>
        <Link to='new_user' className='create-user'>Create User</Link>
      </div>

      <div>
        {
          usersData &&
          usersData.map((user, index) => {
            return(
              <div key={user.id} className='user-card'>
                <h3>User: {user.name}</h3>
                <h3>Email: {user.email}</h3>
                <p>User: {user.role}</p>
                <button onClick={() => removeUser(index)}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Users;