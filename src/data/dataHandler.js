import TransactionHistoryData from './transaction-history';

let DataHandler = {};

DataHandler.findByTransactionId = (id) => {
    return TransactionHistoryData.filter((transaction) => {
        return transaction.id === id;
    });
};

DataHandler.getAllData = (query) => {
    if (!query)
        return TransactionHistoryData;

    let skip = query.skip || 0;
    let limit = query.limit || 10;
    return TransactionHistoryData.slice(skip, skip + limit);
};

export default DataHandler;