import React from 'react';
import './result-block.style.css';

import { ResultField } from '../result-field/result-field.component';

export const ResultBlock = props => {
  return (
    <div className='result-block-container'>
      <div className='right'>
        Estimated rewards by day :
        <ResultField
          resultName='rewards-value-day'
          resultContent={
            '$' + (Math.round(props.resultContent * 100) / 100).toLocaleString()
          }
        />
      </div>
      <div className='right'>
        Percentage by day :
        <ResultField
          resultName='rewards-value-day'
          resultContent={Math.round(props.percentage * 100) / 100 + '%'}
        />
      </div>
      <div className='right'>
        Estimated rewards by month :
        <ResultField
          resultName='rewards-value-month'
          resultContent={
            '$' +
            (
              Math.round(((props.resultContent * 365) / 12) * 100) / 100
            ).toLocaleString()
          }
        />
      </div>
      <div className='right'>
        Percentage by month:
        <ResultField
          resultName='rewards-value-month'
          resultContent={
            Math.round((props.percentage * 365 * 100) / 12) / 100 + '%'
          }
        />
      </div>
      <div className='right'>
        Estimated rewards by year :
        <ResultField
          resultName='rewards-value-year'
          resultContent={
            '$' +
            (Math.round(props.resultContent * 365 * 100) / 100).toLocaleString()
          }
        />
      </div>
      <div className='right'>
        Percentage by year:
        <ResultField
          resultName='rewards-value-year'
          resultContent={Math.round(props.percentage * 365 * 100) / 100 + '%'}
        />
      </div>
    </div>
  );
};
