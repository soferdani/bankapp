import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {
    
    render() {
        return (
            <div>
                {this.props.data.map(d => {
                    return (
                        <Transaction key={d._id} id={d._id} data={d} removeHandel={this.props.removeHandel} />
                    )
                })}
            </div>
        );
    }
}

export default Transactions