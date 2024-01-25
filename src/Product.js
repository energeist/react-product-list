import React from 'react';

function Product(props) {
  return (
    <div className="productCard">
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p>{props.category}</p>
    </div>
  );
}

export default Product;