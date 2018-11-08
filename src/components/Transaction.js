import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Transaction = (props) => {
    const {description, amount, time} = props.transaction; 
    const transType = props.transType;
    const index = props.index;
    return (
    <div id="transactionInfo"> 
        <div className="transactionDetail">{description}</div> 
        <div className="amount transactionDetail">{amount}</div>
        <div className="transactionDetail"> {time}</div>
        <FontAwesomeIcon icon="trash" onClick= {(e)=> props.delete(index,transType)} />  
    </div>    
    );
}
export default Transaction;