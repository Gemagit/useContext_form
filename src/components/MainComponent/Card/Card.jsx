import React from 'react';

const Card = ({props}) => {

  return (
    <article>
      <p>Name: {props.name} </p>
      <p>Email: {props.email}</p>
      <p>Url img:{props.img_url} </p>
      <p>Age: {props.age}</p>
    </article>

  );
};

export default Card; 
