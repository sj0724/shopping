import React from 'react';

function Checkbox({ item, calculate, checked }) {
  return (
    <div>
      <input
        type='checkbox'
        onChange={() => calculate(item)}
        checked={checked}
      ></input>
    </div>
  );
}

export default Checkbox;
