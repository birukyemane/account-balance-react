import React from 'react';
import Transaction from './Transaction'

const Transactions = (props) => {
    const {transactions} = props;
    let displayTransactions = transactions.map((transaction,index) =>{
        return <Transaction key={transaction.id} transType={props.transType} index={index} transaction={transaction} delete={props.delete}/>;});
    return (
        <div className="transactions-list"> 
        <h2 className="summaryTitles blue-background">{props.transType}</h2>  
          <div id="transactionInfo"> 
            <div className="transactionDetail transactionTitle">Description</div> 
            <div className=" amount transactionDetail transactionTitle">Amount (£)</div>
            <div className="transactionDetail transactionTitle">Time</div> 
          </div>    
        {displayTransactions}
        <div id="accountSummaryTitle">Total Income: {props.total}</div>
      </div>      
    );
}
export default Transactions;