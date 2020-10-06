import React, { Component } from 'react';

class Transaction extends Component {
    render() {
        // console.log(this.props.data);
        return (
            <div className='transaction'>
                <button id='remove'>remove</button>
                <span>Amount: {this.props.data.amount}  </span>
                <span>Vendor: {this.props.data.vendor}  </span>
                <span>Category: {this.props.data.category}  </span>
                {console.log(this.props.id)}
            </div>
        );
    }
}

export default Transaction