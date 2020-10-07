import React, { Component } from 'react';
import './App.css';
import Operations from './component/Operations';
import Transactions from './component/Transcations';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data : [],
      totalAmount: 0
    }
  }

  async componentDidMount() {
    try {
      let allTheData = await axios.get('http://localhost:3001/transactions')
      let sum = 0
      //TODO: - add id statement
      allTheData.data.forEach(a => sum += a.amount)
      this.setState({
        data: allTheData.data,
        totalAmount: sum
      })
      // console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  }

  removeTransaction = async (id) => {
    try { 
      let newData = [...this.state.data]
      newData = newData.filter(i => i._id != id)
      let newSum = this.getNewSum(newData)
      await axios.delete(`http://localhost:3001/transaction?id=${id}`)
        this.setState({
          data: newData,
          totalAmount: newSum
        })
    } catch (err) {
      console.log(err);
    }
  }

  
  getDepositToHandel = async (amount,vendor,category) => {
    if (this.state.totalAmount + amount < 0) {
      console.log("you don't have enough mony to make this request");
      // need to return new component
    } else {
      try {
        await axios.post('http://localhost:3001/transaction', {
          amount: amount, vendor: vendor, category: category
        })
        let dataToAdd = {amount,vendor,category}
        let newData = [...this.state.data]
        newData.push(dataToAdd)
        let newSum = this.getNewSum(newData)
        this.setState({
          data: newData,
          totalAmount: newSum
        })

      } catch (err) {
        console.log(err);
      }
    }
  }
      
  getNewSum = (arr) => {
    let sum = 0
    arr.forEach(s => sum += s.amount)
    return sum
  }
  

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        this is App and your total balance is :
        <div>{this.state.totalAmount}</div>
        <Transactions  data={this.state.data} removeHandel={this.removeTransaction} />
        <Operations depositHandlee={this.getDepositToHandel} />
      </div>
    );
  }
}

export default App;
