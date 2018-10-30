import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish'
import sampleFishes from '../sample-fishes'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      orders: {},
    }
  }
  addFish = fish => {
    let fishes = { ...this.state.fishes };
    const time = Date.now();
    fishes[`fish-${time}`] = fish
    this.setState({ fishes })
  }

  loadSamples = () => {
    this.setState({ fishes: sampleFishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes)
            .map(id => <Fish key={id} item={this.state.fishes[id]} />)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
