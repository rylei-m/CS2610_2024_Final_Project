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
