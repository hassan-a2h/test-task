import usersData from './assets/users_data';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <>
      <Link to='new_user'>Sign up</Link>
      {
        usersData &&
        usersData.map((user, index) => {
          return(
            <div key={index}>
              <h3>User: {user.name}</h3>
              <h3>Email: {user.email}</h3>
              <p>User: {user.role}</p>
              <hr />
            </div>
          )
        })
      }
    </>
  )
};

export default Users;