import React from 'react';

export const PriceChecoin = ({ marketCap, coinPriceUSD }) => (
  <div className='price-checoin'>
    <div className='grid'>
      <div className='right'>$CheCoin MarketCap :</div>
      <div className='right'>$ {marketCap.toLocaleString()}</div>
      <div className='right'>$CheCoin USD price :</div>
      <div className='right'>$ {coinPriceUSD}</div>
    </div>
  </div>
);
