import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return robots.map((user, i) => (
    <Card
      key={user.id}
      name={user.name}
      id={user.id}
      email={user.email}
      loading={i === 0 ? undefined : 'lazy'}
    />
  ));
};

export default CardList;
