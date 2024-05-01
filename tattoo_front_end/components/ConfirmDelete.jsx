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

export function ConfirmDelete({ tattoo }) {
  const handleDelete = () => {
    // Handle deletion logic
  };

  return (
    <div className="deletion">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete the tattoo?</p>
      <form onSubmit={handleDelete}>
        <button type="submit">Yes, delete</button>
        <a href={`/edit_tattoo/${tattoo.id}`}>Cancel</a>
      </form>
    </div>
  );
}
