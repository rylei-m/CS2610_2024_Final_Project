import React, { useContext } from 'react';
import { StateContext } from './StateContext';

const MyComponent = () => {
  const { state, dispatch } = useContext(StateContext);

  // Now you can use state and dispatch here

  return (
    // Your component JSX
  );
};

export default MyComponent;

function SignupForm() {
  const signup = (event) => {
    event.preventDefault();
    // Handle signup form submission
  };

  return (
    <div>
      <h2>Create An Account</h2>
      <form onSubmit={signup}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign Up</button>
        <p></p>
        <div className="boxes">
          <p>Already Have An Account?</p>
          <button className="btn" onClick={() => { /* Handle login button click */ }}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
