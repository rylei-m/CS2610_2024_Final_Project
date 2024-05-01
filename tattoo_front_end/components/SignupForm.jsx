import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to signup endpoint
      const response = await axios.post('/api/signup/', formData);
      console.log('Signup successful:', response.data);
      // Call the onSubmit function passed from props (if provided)
      if (onSubmit) {
        onSubmit(formData);
      }
      // Optionally, you can reset the form fields after submission
      setFormData({ username: '', password: '' });
    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup error (e.g., display error message to user)
    }
  };

  return (
    <div>
      <h2>Create An Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
        <p></p>
        <div className="boxes">
          <p>Already Have An Account?</p>
          <button className="btn" onClick={() => { /* Handle login button click */ }}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
