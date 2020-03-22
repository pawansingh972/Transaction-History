import React from 'react';

import './transactionHistoryHeader.css';

function TransactionHistoryHeader () {
    return (
        <div className="TransactionHistoryHeader"> 
            <div className="header-left">
                <h3>Account Overview ( 409000611074 )</h3>
                <span>Your account overview and recent transactions.</span>
            </div>
            <div className="header-right">
                <div className="profile-pic">
                </div>
                <div className="balance-details">
                    <h3>$ 14,75,632.00</h3>
                    <span> Your balance amount. </span>
                </div>
            </div>
        </div>
    )
}

export default TransactionHistoryHeader;