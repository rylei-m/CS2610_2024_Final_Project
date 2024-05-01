import React from 'react';

function LoginForm() {
  const login = (event) => {
    event.preventDefault();
    // Add login logic here
  };

  return (
    <div className="temps">
      <h2>Login</h2>
      <form id="loginForm" onSubmit={login}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
        <p></p>
        <div className="boxes">
          <p>Don't Have An Account?</p>
          <button className="btn" onClick={() => { /* Handle sign up button click */ }}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
