import React, { Component } from 'react';

class Denominations extends Component {
    constructor(props) {
      super(props);

    }

    
    render() {

    var alertPanel = <div></div>;
    if (this.props.success === true) {
      alertPanel = <div className='panel panel-default'>
                      <div className='panel-body bg-success text-center'>
                        <strong className='text-success'>The total change due is ${this.props.weOwe}</strong>
                      </div>
                  </div>;
    } else if (this.props.success === false) {
        alertPanel = <div className='panel panel-default'>
                      <div className='panel-body bg-danger text-center'>
                        <strong className='text-danger'>That ain't enough!</strong>
                      </div>
                    </div>;
    }

      return (
        <div className='col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-body'>
              {alertPanel}
              <div className='row'>
                <div className='col-md-3'>
                  <div className='well well-sm text-center'>
                    <strong>Twenties</strong>
                    <h3>{this.props.denoms.twenties}</h3>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='well well-sm text-center'>
                    <strong>Tens</strong>
                    <h3>{this.props.denoms.tens}</h3>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='well well-sm text-center'>
                    <strong>Fives</strong>
                    <h3>{this.props.denoms.fives}</h3>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='well well-sm text-center'>
                    <strong>Ones</strong>
                    <h3>{this.props.denoms.dollars}</h3>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='well well-sm text-center'>
                    <strong>Quarters</strong>
                    <h3>{this.props.denoms.quarters}</h3>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='well well-sm text-center'>
                    <strong>Dimes</strong>
                    <h3>{this.props.denoms.dimes}</h3>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='well well-sm text-center'>
                    <strong>Nickles</strong>
                    <h3>{this.props.denoms.nickles}</h3>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='well well-sm text-center'>
                    <strong>pennies</strong>
                    <h3>{this.props.denoms.pennies}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default Denominations;