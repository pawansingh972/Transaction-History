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
                    {/* <Transaction></Transaction> */}
                    
                    <div className="transaction title">
                        <div className="transaction-date-title"> Transaction date </div>
                        <div className="transaction-id-title"> Transaction ID </div>
                        <div className="transaction-details-title"> Transaction deatils </div>
                        <div className="transaction-amnt-title"> Transaction amount </div>
                    </div>

                    <div className="transaction odd">
                        <div className="transaction-date"> 18 Jul 17 </div>
                        <div className="transaction-id"> 11213123213213 </div>
                        <div className="transaction-details"> FDRL/INTERNAL FUND TRANSFE </div>
                        <div className="transaction-amnt credit"> $ 5,00,000.00 </div>
                    </div>

                    <div className="transaction even">
                        <div className="transaction-date"> 18 Jul 17 </div>
                        <div className="transaction-id"></div>
                        <div className="transaction-details"> FDRL/INTERNAL FUND TRANSFE </div>
                        <div className="transaction-amnt debit"> $ 5,00,000.00 </div>
                    </div>

                    <div className="transaction odd">
                        <div className="transaction-date"> 18 Jul 17 </div>
                        <div className="transaction-id"></div>
                        <div className="transaction-details"> FDRL/INTERNAL FUND TRANSFE </div>
                        <div className="transaction-amnt credit"> $ 5,00,000.00 </div>
                    </div>

                    <div className="transaction even">
                        <div className="transaction-date"> 18 Jul 17 </div>
                        <div className="transaction-id"></div>
                        <div className="transaction-details"> FDRL/INTERNAL FUND TRANSFE </div>
                        <div className="transaction-amnt credit"> $ 5,00,000.00 </div>
                    </div>

                    <div className="transaction odd">
                        <div className="transaction-date"> 18 Jul 17 </div>
                        <div className="transaction-id"></div>
                        <div className="transaction-details"> FDRL/INTERNAL FUND TRANSFE </div>
                        <div className="transaction-amnt debit"> $ 5,00,000.00 </div>
                    </div>

                    <div className="transaction even">
                        <div className="transaction-date"> 18 Jul 17 </div>
                        <div className="transaction-id"></div>
                        <div className="transaction-details"> FDRL/INTERNAL FUND TRANSFE </div>
                        <div className="transaction-amnt debit"> $ 5,00,000.00 </div>
                    </div>

                    <div className="transaction odd">
                        <div className="transaction-date"> 18 Jul 17 </div>
                        <div className="transaction-id"></div>
                        <div className="transaction-details"> FDRL/INTERNAL FUND TRANSFE </div>
                        <div className="transaction-amnt debit"> $ 5,00,000.00 </div>
                    </div>

                    <div className="transaction even">
                        <div className="transaction-date"> 18 Jul 17 </div>
                        <div className="transaction-id"></div>
                        <div className="transaction-details"> FDRL/INTERNAL FUND TRANSFE </div>
                        <div className="transaction-amnt credit"> $ 5,00,000.00 </div>
                    </div>
                    <div className="transaction odd">
                        <div className="transaction-date"> 18 Jul 17 </div>
                        <div className="transaction-id"></div>
                        <div className="transaction-details"> FDRL/INTERNAL FUND TRANSFE </div>
                        <div className="transaction-amnt debit"> $ 5,00,000.00 </div>
                    </div>

                    <div className="transaction even">
                        <div className="transaction-date"> 18 Jul 17 </div>
                        <div className="transaction-id"></div>
                        <div className="transaction-details"> FDRL/INTERNAL FUND TRANSFE </div>
                        <div className="transaction-amnt credit"> $ 5,00,000.00 </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TransactionHistoryContent;