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

    handelTransaction = (e) => {
        let amountFromState = this.state.Amount
        let btnType = e.target.id
        if (btnType === 'Withdraw-btn') {
            amountFromState = ((-1)*amountFromState)
        }        
        this.props.depositHandlee(amountFromState,this.state.Vendor,this.state.Category)
    }

    render() {
        return (
            <div>
                <span>Amount: </span><input id='Amount-input' name='Amount' type="text" onChange={this.handelInput} />
                <span>Vendor: </span><input id='Vendor-input' name='Vendor' type="text" onChange={this.handelInput} />
                <span>Category: </span><input id='Category-input' name='Category' type="text" onChange={this.handelInput} />
                <button onClick={this.handelTransaction} id='Deposit-btn' >Deposit</button>
                <button onClick={this.handelTransaction} id='Withdraw-btn' >Withdraw</button>
            </div>
        );
    }
}


export default Operations