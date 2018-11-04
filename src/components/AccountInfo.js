import React from 'react';
import PropTypes from 'prop-types';

const AccountInfo = (props) => {
    let {firstName, lastName, incomes,expenses} = props;
    expenses = Array.from(expenses);
    return (
    <div>
     <h2 id="mainTitle">Personal Account</h2>               
     <div id="name">Name: {lastName} {firstName}</div>
     <div id="balanceInfo">
        <div id="accountSummaryTitle">Total Income: {totalIncome(incomes)}</div>
        <div id="accountSummaryTitle">Total Expense: {totalExpense(expenses)}</div>
        <hr />
        <div id="accountSummaryTitle">Balance: {accountBalance(incomes, expenses)}</div>
     </div>
    </div>
    );
}

AccountInfo.propTypes = {
    incomes: PropTypes.array,
    expenses: PropTypes.array
};

const calculateTotal = (accumulator, currentValue) => accumulator + currentValue.amount;  

const totalIncome = (incomes)=>{
    return incomes.reduce(calculateTotal, 0);
}
const totalExpense = (expenses)=>{     
    return expenses.reduce(calculateTotal, 0);
}
const accountBalance =  (incomes, expenses) =>{
    return totalIncome(incomes) - totalExpense(expenses);
}

export default AccountInfo;