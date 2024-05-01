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

export function EditTattoo({ form, tattoo }) {
  const handleSubmit = (event) => {
    // Handle form submission logic
    event.preventDefault();
    // Add logic to handle form submission
  };

  const handleDelete = () => {
    // Handle deletion logic
  };

  return (
    <div className="editor">
      <h2>Edit Tattoo</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* You may need to handle CSRF token in your React application */}
        {/* <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} /> */}
        {/* Render form fields */}
        {/* Replace the form fields with your React form component */}
        {form}
        <button type="submit">Save Changes</button>
      </form>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}
