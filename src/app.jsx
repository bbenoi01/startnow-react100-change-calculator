import React, { Component } from 'react';
import UserInput from './UserInput';
import Denominations from './Denominations';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      denoms: {
        twenties: 0,
        tens: 0,
        fives: 0,
        dollars: 0,
        quarters: 0,
        dimes: 0,
        nickles: 0,
        pennies: 0
      },

      success: null,
      weOwe: null,
    }
    this.getDenoms = this.getDenoms.bind(this);
  }

  getDenoms(denoms, success, weOwe) {
    this.setState({denoms: denoms, success: success, weOwe: weOwe});
  }

  render() {
    return (
      <div className='container'>
        <h1 style={{color: 'white'}}>Change Calculator</h1>
        <hr />
        <div className="row">
          <UserInput getDenoms={this.getDenoms}/>
          <Denominations denoms={this.state.denoms} success={this.state.success} weOwe={this.state.weOwe} />
        </div>
      </div>
    )
  }
}

export default App;
