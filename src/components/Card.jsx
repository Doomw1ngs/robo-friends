import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card'>
      <img
        src={`https://robohash.org/${id}?set=set4&size=200x200`}
        width={200}
        height={200}
        alt='Cat Profile'
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
