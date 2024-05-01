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

function Navbar() {
  return (
    <div>
      <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} />

      <header id="Heading">
        <h1>Tattoo Tracker</h1>
      </header>
      <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} />
      <nav id="auth" className="auth">
        <button className="btn" onClick={() => { /* Handle login button click */ }}>Login</button>
        <button className="btn" onClick={() => { /* Handle sign up button click */ }}>Sign Up</button>
        <button onClick={() => { /* Handle check login state button click */ }}>Check Login State</button>
        <button onClick={() => { /* Handle logout button click */ }}>Logout</button>
      </nav>
      <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} />
      <div className="navigation">
        <a href="/" className="btn">Home</a>
        <a href="/upload_tattoo" className="btn btn-primary">Upload New Tattoo</a>
        <a href="/view_tattoos" className="btn btn-primary">View Tattoos</a>
        <a href="/public_gallery" className="btn btn-primary">Public Gallery</a>
      </div>
      <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} />
      {/* You can add logic here to conditionally render the "View Details and Edit" link */}
      <a href="/edit_tattoo">View Details and Edit</a>

      {/* Add a footer if needed */}
      <footer>
        <h3>By: Rylei Mindrum | A02352206</h3>
      </footer>
    </div>
  );
}

export default Navbar;
