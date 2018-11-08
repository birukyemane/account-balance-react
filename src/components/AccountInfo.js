import React from 'react';
import PropTypes from 'prop-types';

const AccountInfo = (props) => {
    let {firstName, lastName, balance} = props;
    return (
    <div>
     <h2 className="mainTitle blue-background">Personal Account</h2>               
     <div class="name">Name: {lastName} {firstName}</div>         
     <h3 className="balance">Net Balance: {balance}</h3>     
    </div>
    );
}

AccountInfo.propTypes = {
    incomes: PropTypes.array,
    expenses: PropTypes.array
};



export default AccountInfo;