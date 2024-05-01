import React from 'react';

function MyTattoos({ tattoos }) {
  return (
    <div>
      {tattoos.length > 0 ? (
        <>
          <h2>My Tattoos</h2>
          {tattoos.map((tattoo) => (
            <div key={tattoo.id} className="viewer">
              <img src={tattoo.image.url} alt="Tattoo" />
              <p>{tattoo.description}</p>
              {/* You can replace the link with a button and handle editing logic */}
              <a href={`edit_tattoo/${tattoo.id}`}>Edit</a>
            </div>
          ))}
        </>
      ) : (
        <p>No tattoos available</p>
      )}
    </div>
  );
}

export default MyTattoos;
