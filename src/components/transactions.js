import React from 'react';

const Transactions = (props) => {
    let {transactions} = props;
    let displayTransactions = transactions.map((transaction,index) =>{
        return <div id="transactionInfo" key={index}> 
        <div className="transactionDetail">{transaction.description}</div> 
        <div className="amount transactionDetail">{transaction.amount}</div>
        <div className="transactionDetail"> {transaction.time}</div>
        </div>;});
    return (
        <div id="incomeSummary"> 
        <h2 className="summaryTitles">{props.title}</h2>  
          <div id="transactionInfo"> 
            <div className="transactionDetail transactionTitle">Description</div> 
            <div className=" amount transactionDetail transactionTitle">Amount (£)</div>
            <div className="transactionDetail transactionTitle">Time</div> 
          </div>    
        {displayTransactions}
      </div>      
    );
}
export default Transactions;