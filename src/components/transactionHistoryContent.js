import React from "react";

import SortByComponent from "./sortByComponent.js";

import FintechSVGComponent from "../fintechSVGComponent";
import DataHandler from "../data/dataHandler";
import { Button } from "react-bootstrap";

class TransactionHistoryContent extends React.Component {
  constructor(props) {
    super(props);
    let { transactions, totalPages } = DataHandler.getAllData({
      skip: 0,
      limit: 10
    });
    this.state = {
      transactions: transactions,
      totalPages: totalPages,
      totalTransactions: null,
      currentPage: 1,
      searchKey: ""
    };
    this.pageSize = 10;

    this.handleOnChange = this.handleOnChange.bind(this);
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
    let searchKey = this.state.searchKey;

    let { transactions, totalPages } = DataHandler.getAllData({
      skip,
      limit,
      searchKey
    });

    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
      transactions: transactions,
      totalPages: totalPages
    }));
  }
  getPrevPage(event) {
    event.preventDefault();

    let currentPage = this.state.currentPage;
    let skip = (currentPage - 2) * this.pageSize;
    let limit = this.pageSize;
    let searchKey = this.state.searchKey;

    let { transactions, totalPages } = DataHandler.getAllData({
      skip,
      limit,
      searchKey
    });

    this.setState(prevState => ({
      currentPage: prevState.currentPage - 1,
      transactions: transactions,
      totalPages: totalPages
    }));
  }

  handleSortBy(sortBy) {
    let skip = 0;
    let limit = 10;
    let searchKey = this.state.searchKey;

    let { transactions, totalPages } = DataHandler.getAllData({
      skip,
      limit,
      sortBy,
      searchKey
    });
    this.setState(prevState => ({
      currentPage: 1,
      transactions: transactions,
      totalPages: totalPages
    }));
  }

  handleOnChange = event => {
    event.persist();
    let searchKey = event.target.value;
    this.setState({ searchKey });

    let skip = 0;
    let limit = 10;
    let sortBy = this.state.sortBy;
    let { transactions, totalPages } = DataHandler.getAllData({
      skip,
      limit,
      sortBy,
      searchKey
    });

    this.setState(prevState => ({
      currentPage: 1,
      transactions: transactions,
      totalPages: totalPages
    }));
  };

  render() {
    return (
      <div className="TransactionHistoryContent">
        <div className="header">
          <div className="header-left">
            <FintechSVGComponent />
            <h2>Transaction History</h2>
          </div>
          <div className="header-right">
            <input
              className="search-box"
              title="search by recipient (Transaction details)"
              value={this.state.searchKey}
              placeholder="search by recipient (Transaction details)"
              onChange={this.handleOnChange}
            />
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
