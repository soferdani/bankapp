import React, { Component } from 'react';
import './App.css';
import Operations from './component/Operations';
import Transaction from './component/Transaction';
import Transactions from './component/Transcations';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dummy: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ],
      totalAmount: 0
    }
  }

  componentDidMount() {
    let temp = 0
    this.state.dummy.forEach(s => temp += s.amount)
    this.setState({
      totalAmount: temp
    })
  }

  getDepositToHandel = (amount,vendor,category) => {
    this.state.dummy.push(
      {amount:amount, vendor:vendor, category:category}
    )
    let sum = 0
    this.state.dummy.forEach(i => sum += i.amount)
    this.setState({
      totalAmount: this.state.totalAmount+sum
    })
    console.log(this.state);
  }

  
  removeTransaction(id) {
    // this.state.dummy.splice(id,1)
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        this is App and your total balance is :
        <div>{this.state.totalAmount}</div>
        <Transactions data={this.state.dummy} />
        <Operations depositHandlee={this.getDepositToHandel} />
      </div>
    );
  }
}

export default App;
