import React from 'react';

function PublicGallery({ tattoos, isAuthenticated }) {
  return (
    <div>
      <h2>Public Gallery</h2>
      <div className="gallery">
        {tattoos.map((tattoo) => (
          <img key={tattoo.id} src={tattoo.image.url} alt={tattoo.title} />
        ))}
      </div>
      <p></p>
      {!isAuthenticated && (
        <div className="boxes">
          <p>Want to Upload your own Tattoos?</p>
          <button className="btn" onClick={() => { /* Handle login button click */ }}>Login</button>
          <button className="btn" onClick={() => { /* Handle sign up button click */ }}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default PublicGallery;
