import React from "react";

import SortByComponent from "./sortByComponent.js";

import FintechSVGComponent from "../fintechSVGComponent";
import DataHandler from "../data/dataHandler";
import { Button } from "react-bootstrap";

class TransactionHistoryContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: DataHandler.getAllData({ skip: 0, limit: 10 }),
      totalPages: DataHandler.getAllData().length / 10,
      totalTransactions: null,
      currentPage: 1
    };
    this.pageSize = 10;

    this.getTransactionType = this.getTransactionType.bind(this);
    this.getOddEvenClass = this.getOddEvenClass.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.getPrevPage = this.getPrevPage.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
  }

  getTransactionType(transaction) {
    return transaction["Withdrawal AMT"] ? "debit" : "credit";
  }

  getOddEvenClass(idx) {
    return (idx + 1) % 2 === 0 ? " even " : " odd ";
  }

  getNextPage(event) {
    event.preventDefault();
    let currentPage = this.state.currentPage;
    let skip = currentPage * this.pageSize;
    let limit = this.pageSize;
    let transactions = DataHandler.getAllData({ skip, limit });

    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
      transactions: transactions
    }));
  }
  getPrevPage(event) {
    event.preventDefault();

    let currentPage = this.state.currentPage;
    let skip = (currentPage - 2) * this.pageSize;
    let limit = this.pageSize;

    let transactions = DataHandler.getAllData({ skip, limit });

    this.setState(prevState => ({
      currentPage: prevState.currentPage - 1,
      transactions: transactions
    }));
  }

  handleSortBy(sortBy) {
    let skip = 0;
    let limit = 10;
    let transactions = DataHandler.getAllData({ skip, limit, sortBy });
    this.setState(prevState => ({
      currentPage: 1,
      transactions: transactions
    }));
  }

  render() {
    return (
      <div className="TransactionHistoryContent">
        <div className="header">
          <div className="header-left">
            <FintechSVGComponent />
            <h2>Transaction History</h2>
          </div>
          <div className="header-right">
            <span>Sort by : </span>
            <SortByComponent handleSortBy={this.handleSortBy} />
          </div>
        </div>

        <div className="bottom">
          {/* <Transaction></Transaction> */}

          <div className="transaction title">
            <div className="transaction-date-title"> Transaction date </div>
            <div className="transaction-details-title">
              {" "}
              Transaction deatils{" "}
            </div>
            <div className="transaction-amnt-title"> Transaction amount </div>
            <div className="transaction-balance-amnt-title"> Balance Amnt </div>
          </div>

          {this.state.transactions &&
            this.state.transactions.map((transaction, idx) => {
              return (
                <div
                  className={"transaction" + this.getOddEvenClass(idx)}
                  key={idx}
                >
                  <div className="transaction-date"> {transaction.Date} </div>
                  <div className="transaction-details">
                    {" "}
                    {transaction["Transaction Details"]}{" "}
                  </div>
                  <div
                    className={
                      "transaction-amnt " + this.getTransactionType(transaction)
                    }
                  >
                    {" "}
                    {transaction["Withdrawal AMT"] ||
                      transaction["Deposit AMT"]}{" "}
                  </div>
                  <div className="transaction-balance-amnt">
                    {transaction["Balance AMT"]}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="pagination">
          <Button
            variant={
              "outline-primary prev-btn " +
              (this.state.currentPage === 1 ? "disabled" : "")
            }
            onClick={this.getPrevPage}
          >
            Prev
          </Button>{" "}
          <Button
            variant={
              "outline-primary next-btn " +
              (this.state.currentPage === Math.ceil(this.state.totalPages)
                ? "disabled"
                : "")
            }
            onClick={this.getNextPage}
          >
            Next
          </Button>{" "}
        </div>
      </div>
    );
  }
}

export default TransactionHistoryContent;
