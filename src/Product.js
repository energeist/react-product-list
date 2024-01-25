import React from 'react';

function Product(props) {
  return (
    <div className={"productCard " + props.outOfStock}>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p>Category: {props.category}</p>
      <p>Rating: {props.rating}</p>
      {props.units === 0 ? <p>Out of stock!</p> : <p>Units available: {props.units}</p>}
    </div>
  );
}

export default Product;