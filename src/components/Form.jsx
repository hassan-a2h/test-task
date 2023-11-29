const Form = () => {
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
            <option value="1" selected>User</option>
            <option value="2">Admin</option>
            <option value="3">Mod</option>
          </select>
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;