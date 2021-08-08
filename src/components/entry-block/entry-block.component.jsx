import React from 'react';
import './entry-block.style.css';

import { InputBox } from '../input-box/input-box.component';
import { Button } from '../button/button.component';

export const EntryBlock = props => (
  <div className='entry-block-container'>
    <h2 className='left'>$CheCoins Number</h2>
    <div className='grid'>
      <Button
        value='10000'
        handleClick={props.handleClickButtonNumber}
        text='+ 10K'
      />
      <Button
        value='100000'
        handleClick={props.handleClickButtonNumber}
        text='+ 100K'
      />
      <Button
        value='1000000'
        handleClick={props.handleClickButtonNumber}
        text='+ 1M'
      />
      <Button
        value='10000000'
        handleClick={props.handleClickButtonNumber}
        text='+ 10M'
      />
      <Button
        value='100000000'
        handleClick={props.handleClickButtonNumber}
        text='+ 100M'
      />
      <Button handleClick={props.handleClickButtonNumber} text='Reset' />
    </div>
    <InputBox
      boxType='number'
      boxName='coinsNumber'
      placeholder='Enter how many $CheCoins you have'
      handleChange={props.handleChangeCoinsNumber}
      value={props.coinsNumber !== 0 ? props.coinsNumber : ''}
    />
    <br></br>
    <h2 className='left'>Transactions volume</h2>
    <div className='grid'>
      <Button
        value='10000'
        handleClick={props.handleClickButtonVolume}
        text='+ 10K'
      />
      <Button
        value='100000'
        handleClick={props.handleClickButtonVolume}
        text='+ 100K'
      />
      <Button
        value='1000000'
        handleClick={props.handleClickButtonVolume}
        text='+ 1M'
      />
      <Button
        value='10000000'
        handleClick={props.handleClickButtonVolume}
        text='+ 10M'
      />
      <Button
        value='100000000'
        handleClick={props.handleClickButtonVolume}
        text='+ 100M'
      />
      <Button handleClick={props.handleClickButtonVolume} text='Reset' />
    </div>
    <InputBox
      boxType='number'
      boxName='transactionsVolume'
      placeholder='Enter the 24h transactions volume'
      handleChange={props.handleChangeTransactionsVolume}
      value={props.transactionsVolume !== 0 ? props.transactionsVolume : ''}
    />
  </div>
);
