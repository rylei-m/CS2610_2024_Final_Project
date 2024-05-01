import React from 'react';

function ConfirmDelete({ tattoo }) {
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

export default ConfirmDelete;
