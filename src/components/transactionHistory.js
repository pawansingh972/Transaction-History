import React from "react";

import TransactionHistoryHeader from "./transactionHistoryHeader";
import "./transactionHistory.css";

import TransactionHistoryContent from "./transactionHistoryContent";
import "./transactionHistoryContent.css";

class TransactionHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="TransactionHistory-container">
        <TransactionHistoryHeader />
        <TransactionHistoryContent />
      </div>
    );
  }
}

export default TransactionHistory;
