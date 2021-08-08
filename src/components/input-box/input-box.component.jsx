import React from 'react';

import './input-box.style.css';

export const InputBox = ({
  boxName,
  value,
  boxType = 'text',
  placeholder,
  handleChange,
}) => (
  <div className={'inputBox ' + boxName}>
    <input
      className={boxName}
      type={boxType}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  </div>
);
