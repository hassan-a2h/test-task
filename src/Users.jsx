import usersData from './assets/users_data';

const Users = () => {
  return (
    <>
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