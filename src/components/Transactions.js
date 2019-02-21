import React from 'react';
import Transaction from './Transaction'

const Transactions = (props) => {
    const {transactions} = props;
    let displayTransactions = transactions.map((transaction,index) =>{
        return <Transaction key={transaction.id} transType={props.transType} index={index} transaction={transaction} delete={props.delete} save={props.save}/>;});
    return (
        <div className="transactions-summary">
            <h3 className="summaryTitles blue-background">{props.transType}</h3>  
            <div className="transactionInfo"> 
                <div className="transactionDetail transactionTitle">Description</div> 
                <div className="  transactionDetail transactionTitle">Amount</div>
                <div className="transactionDetail transactionTitle">Time</div> 
            </div> 
            <div className="transactions-list">                
            {displayTransactions}
            </div>
            <h3 className="summaryTitles green-background ">Total: {props.total}</h3> 
        </div>
    );
}
export default Transactions;