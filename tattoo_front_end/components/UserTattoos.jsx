import React from 'react';

function UserTattoos({ userTattoos }) {
  return (
    <div>
      {userTattoos.map((tattoo) => (
        <div key={tattoo.id}>
          <img src={tattoo.image} alt={`Tattoo image on ${tattoo.body_part}`} />
          <p>Artist: {tattoo.artist_name}</p>
          <p>Date: {tattoo.date}</p>
          <p>Description: {tattoo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default UserTattoos;
