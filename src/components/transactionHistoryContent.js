import React from 'react';
import logo from '../fintech.svg';

import Transaction from './transactionCard';

class TransactionHistoryContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="TransactionHistoryContent">
                <div className="header">
                    <img src={logo} className="transactions-logo" alt="transactions-logo"></img>
                    <h2>Transaction History</h2>
                </div>

                <div className="bottom">
                    <Transaction></Transaction>
                </div>
            </div>
        )
    }

}

export default TransactionHistoryContent;