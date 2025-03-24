import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return robots.map((user, i) => (
    <Card
      key={robots[i].id}
      name={robots[i].name}
      id={robots[i].id}
      email={robots[i].email}
    />
  ));
};

export default CardList;
