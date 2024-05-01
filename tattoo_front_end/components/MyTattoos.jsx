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

export function MyTattoos({ tattoos }) {
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
