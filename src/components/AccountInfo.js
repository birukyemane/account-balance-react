// displays the account info

import React from 'react';
import PropTypes from 'prop-types';

const AccountInfo = (props) => {
    let {firstName, lastName, balance} = props;
    return (
    <div>
     <div className="name">Name: {lastName} {firstName}</div>         
     <h3 className="balance">Net Balance: {balance}</h3>     
    </div>
    );
}

AccountInfo.propTypes = {
    incomes: PropTypes.array,
    expenses: PropTypes.array
};



export default AccountInfo;