import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';

import { EntryBlock } from './components/entry-block/entry-block.component';
import { PriceChecoin } from './components/price-checoin/price-checoin.component';
import { ResultBlock } from './components/result-block/result-block.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '0x54626300818e5c5b44db0fcf45ba4943ca89a9e2',
      coinsNumber: 0,
      transactionsVolume: 0,
      fees: 0.07,
      minCoinsNumber: 200000,
      totalCoins: 100000000000,
      rewards: 0,
      marketCap: 0,
      coinPriceUSD: 0,
      dataToken: {},
      percentage: 0,
    };
  }

  rewardsUpdate(value, field = '') {
    const { totalCoins, minCoinsNumber, fees } = this.state;
    const transactionsVolume =
      field === 'transactionsVolume' ? value : this.state.transactionsVolume;
    const coinsNumber =
      field === 'coinsNumber' ? value : this.state.coinsNumber;
    let newRewards = 0;
    if (
      coinsNumber > 0 &&
      transactionsVolume > 0 &&
      coinsNumber < totalCoins &&
      coinsNumber >= minCoinsNumber
    ) {
      newRewards = (transactionsVolume * fees * coinsNumber) / totalCoins;
    }

    this.setState((state, props) => ({
      coinsNumber: coinsNumber,
      transactionsVolume: transactionsVolume,
      rewards: newRewards,
      percentage: this.calculPercentage(coinsNumber, newRewards),
    }));
  }

  handleChangeCoinsNumber = e => {
    const newValue = isNaN(e.target.value) ? 0 : e.target.value;
    this.rewardsUpdate(newValue, 'coinsNumber');
  };

  handleChangeTransactionsVolume = e => {
    const newValue = isNaN(e.target.value) ? 0 : e.target.value;
    this.rewardsUpdate(newValue, 'transactionsVolume');
  };

  handleClickButtonNumber = e => {
    const newValue = e.target.value
      ? this.state.coinsNumber + Number(e.target.value)
      : 0;
    this.rewardsUpdate(newValue, 'coinsNumber');
  };

  handleClickButtonVolume = e => {
    const newValue = e.target.value
      ? this.state.transactionsVolume + Number(e.target.value)
      : 0;
    this.rewardsUpdate(newValue, 'transactionsVolume');
  };

  calculMarketCap(data) {
    return (
      data && data.data && Math.round(data.data.price * this.state.totalCoins)
    );
  }

  coinPriceUSD(data) {
    return (
      data && data.data && Math.round(data.data.price * 100000000) / 100000000
    );
  }

  parseDataToken(data) {
    this.setState({
      marketCap: this.calculMarketCap(data),
      coinPriceUSD: this.coinPriceUSD(data),
    });
  }

  componentDidMount() {
    fetch('https://api.pancakeswap.info/api/v2/tokens/' + this.state.token)
      .then(response => response.json())
      .then(dataToken => this.parseDataToken(dataToken));
  }

  calculPercentage(coins, rewards) {
    return coins > 0 ? (rewards * 100) / (coins * this.state.coinPriceUSD) : 0;
  }

  render() {
    return (
      <div className='App'>
        <PriceChecoin
          marketCap={this.state.marketCap}
          coinPriceUSD={this.state.coinPriceUSD}
        />
        <h1>$CheCoins Rewards</h1>
        <img alt='logo-checoin' src={logo} />
        <br />
        <br />

        <EntryBlock
          handleClickButtonNumber={this.handleClickButtonNumber}
          handleClickButtonVolume={this.handleClickButtonVolume}
          handleChangeCoinsNumber={this.handleChangeCoinsNumber}
          handleChangeTransactionsVolume={this.handleChangeTransactionsVolume}
          coinsNumber={this.state.coinsNumber}
          transactionsVolume={this.state.transactionsVolume}
        />
        <ResultBlock
          resultContent={this.state.rewards}
          coinsNumber={this.state.coinsNumber}
          percentage={this.state.percentage}
        />
      </div>
    );
  }
}

export default App;
