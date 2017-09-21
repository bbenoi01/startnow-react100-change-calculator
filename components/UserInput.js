import React, { Component } from 'react';

class UserInput extends Component {
    constructor(props) {
      super(props);

      this.state = {
        amtDueInput: '',
        amtRecInput: '',
      }
      this.updateamtDueInput = this.updateamtDueInput.bind(this);
      this.updateamtRecInput = this.updateamtRecInput.bind(this);
      this.doTheMath = this.doTheMath.bind(this);
    }

    updateamtDueInput(e) {
      this.setState({amtDueInput: e.target.value})
    }

    updateamtRecInput(e) {
      this.setState({amtRecInput: e.target.value})
    }

    doTheMath(event) {
      event.preventDefault();
      const amtDue = parseFloat(this.state.amtDueInput);
      const tendered = parseFloat(this.state.amtRecInput);
      const weOwe = (tendered - amtDue).toFixed(2);
      var cents = weOwe * 100;
  
      if (cents > 1999) {
        var twenties = Math.floor(cents / 2000);
        cents = cents % 2000;
      } else {
        var twenties = 0;
        cents = cents % 2000;
      }
  
      if (cents > 999) {
        var tens = Math.floor(cents / 1000);
        cents = cents % 1000;
      } else {
        var tens = 0;
        cents = cents % 1000;
      }
  
      if (cents > 499) {
        var fives = Math.floor(cents / 500);
        cents = cents % 500;
      } else {
        var fives = 0;
        cents = cents % 500;
      }
  
      if (cents > 99) {
        var dollars = Math.floor(cents / 100);
        cents = cents = cents % 100;
      } else {
        var dollars = 0;
        cents = cents % 100;
      }
  
      if (cents > 24) {
        var quarters = Math.floor(cents / 25);
        cents = cents % 25;
      } else {
        var quarters = 0;
        cents = cents % 25;
      }
  
      if (cents > 9) {
        var dimes = Math.floor(cents / 10);
        cents = cents % 10;
      } else {
        var dimes = 0;
        cents = cents % 10;
      }
  
      if (cents > 4) {
        var nickles = Math.floor(cents / 5);
        cents = cents % 5;
      } else {
        var nickles = 0;
        cents = cents % 5;
      }
  
      if (cents > 0) {
        var pennies = Math.round(cents);
      }

      var denoms = {
        twenties: twenties,
        tens: tens,
        fives: fives,
        dollars: dollars,
        quarters: quarters,
        dimes: dimes,
        nickles: nickles,
        pennies: pennies,
      }
      
      if (tendered >= amtDue) {
        var success = true;
      } else {
        var success = false;
        denoms = {
          twenties: 0,
          tens: 0,
          fives: 0,
          dollars: 0,
          quarters: 0,
          dimes: 0,
          nickles: 0,
          pennies: 0,
        }
      }
      this.props.getDenoms(denoms, success, weOwe);
    }

  
    render() {
      return (
        <div className='col-md-4'>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>
                Enter Information
              </h3>
            </div>
            <form onSubmit={this.doTheMath}>
              <div className='panel-body from-group'>
                <strong>How much is due?</strong>
                <input type='text' className='form-control' name='amountDue' onChange={this.updateamtDueInput} value={this.state.amtDueInput}/>
                <br />
                <strong>How much was received?</strong>
                <input type='text' className='form-control' name='amountReceived' onChange={this.updateamtRecInput} value={this.state.amtRecInput} />
              </div>
              <div className='panel-footer'>
                <button type='submit' className='btn btn-primary btn-block' >Calculate</button>
              </div>
            </form>
          </div>
        </div>
      )
  
    }
  }

  export default UserInput;