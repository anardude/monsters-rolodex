import React from 'react';

export const Button = ({ value, text, handleClick }) => (
  <div className={'button '}>
    <button value={value} onClick={handleClick}>
      {text}
    </button>
  </div>
);
