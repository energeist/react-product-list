import React from 'react';

function CategoryButton(props) {
  return (
    <button
      onClick={props.onClick}
      key={props.index}
      className={props.isSelected}
    >
      {props.name} <div
        className="Badge"
      >{props.count}</div>
    </button>
  );
}

export default CategoryButton;