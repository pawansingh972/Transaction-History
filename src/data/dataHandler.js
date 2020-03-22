import TransactionHistoryData from "./transaction-history";
import axios from "axios";

const API_URL = `http://starlord.hackerearth.com/bankAccount`;
let DataHandler = {};

DataHandler.findByTransactionId = id => {
  return TransactionHistoryData.filter(transaction => {
    return transaction.id === id;
  });
};

// Note :: Not using the above mentioned API becaus of the following Error
// Mixed Content: The page at 'https://8xn2q.csb.app/' was loaded over HTTPS,
// but requested an insecure XMLHttpRequest endpoint 'http://starlord.hackerearth.com/bankAccount'.
// This request has been blocked; the content must be served over HTTPS.

// As API provided is served over "HTTP" but "codesandbox" is served over http thats we are getting this Error

DataHandler.getAllData = query => {
  //   axios.get(API_URL).then(res => {
  //     const transactions = res.data;
  //   });

  if (!query) return TransactionHistoryData;

  let skip = query.skip || 0;
  let limit = query.limit || 10;
  let sortBy = query.sortBy || "";
  let transactions = TransactionHistoryData.slice(skip, skip + limit);

  if (sortBy) {
    if (sortBy === "Balance AMT") {
      transactions = transactions.sort((a, b) => {
        let x = a[sortBy];
        let y = b[sortBy];
        x = x.replace(/,/g, "");
        y = y.replace(/,/g, "");
        return Number(y) - Number(x);
      });
    }

    if (sortBy === "Date") {
      transactions = transactions.sort((a, b) => {
        return new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime();
      });
    }
  }

  return transactions;
};

export default DataHandler;
