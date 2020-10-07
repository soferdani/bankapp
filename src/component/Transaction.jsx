import React, { Component } from 'react';

class Transaction extends Component {
    
    removeTransaction = () => {
        this.props.removeHandel(this.props.data._id)
    }

    render() {
        return (
            <div className='transaction'>
                <button onClick={this.removeTransaction} id='remove'>remove</button>
                <span>Amount: {this.props.data.amount}  </span>
                <span>Vendor: {this.props.data.vendor}  </span>
                <span>Category: {this.props.data.category}  </span>
            </div>
        );
    }
}

export default Transaction