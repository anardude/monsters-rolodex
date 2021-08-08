import React from 'react';
import './result-field.style.css';

export const ResultField = ({ resultName, resultContent }) => (
  <span className={'resultField ' + resultName}> {resultContent} </span>
);
