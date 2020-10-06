import React, { Component } from 'react';

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            Amount: '',
            Vendor: '',
            Category: ''
        }
    }

    
    handelInput = (e) => {
        let value = e.target.value
        let info = e.target.name
        if (info === 'Amount') {
            value = parseInt(value)
        }
        this.setState({
            [info] : value
        })
    }

    transactionDeposit = () => {
        this.props.depositHandlee(this.state.Amount,this.state.Vendor,this.state.Category)
    }

    transactionWithdraw = () => {
        this.props.depositHandlee(this.state.Amount,this.state.Vendor,this.state.Category)
    }


    render() {
        return (
            <div>
                <input id='Amount-input' name='Amount' type="text" onChange={this.handelInput} /><span>Amount</span>
                <input id='Vendor-input' name='Vendor' type="text" onChange={this.handelInput} /><span>Vendor</span>
                <input id='Category-input' name='Category' type="text" onChange={this.handelInput} /><span>Category</span>
                <button onClick={this.transactionDeposit} id='Deposit-btn' >Deposit</button>
                <button onClick={this.transactionWithdraw} id='Withdraw-btn' >Withdraw</button>
            </div>
        );
    }
}


export default Operations