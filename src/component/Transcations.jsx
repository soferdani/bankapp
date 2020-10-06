import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {
    
    render() {
        return (
            <div>
                {this.props.data.map((d,i) => {
                    return (
                        <Transaction key={i} id={i} data={d} />
                    )
                })}
            </div>
        );
    }
}

export default Transactions