// handles one transaction item. that is the row in the list of transactions. it can be income
// or expense transaction 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Transaction extends React.Component  { 

    constructor(props) {
        super(props);
        this.state = {
            editMode : false
        };
        this.description = this.props.transaction.description;
        this.amount = this.props.transaction.amount;
    }

    descriptionInput = (e) => {
        this.description = e.target.value;
        this.setState({editMode:true});        
    }

    amountInput = (e) => {
        this.amount = Number(e.target.value);
        this.setState({editMode:true});        
    }

    cancel = (e) => {
        this.description = this.props.transaction.description;
        this.amount = this.props.transaction.amount;
        this.setState({editMode:false});        
    }

    save = (e) => {
        this.props.save(this.props.index,this.props.transType, this.description, this.amount);  
        this.setState({ editMode:false});      
    }

    render () {
        const transType = this.props.transType;
        const index = this.props.index;
        const {description, amount, time} = this.props.transaction;
        
        const descriptionInput = <input key="1" className="transactionDetail" type="text" value={this.description} onChange={this.descriptionInput}/>;
        const amountInput = <input key="2" className="amount transactionDetail" type="text" value={this.amount} onChange={this.amountInput}/>;
        const canclelButton = <button key="3" className="edit-buttons" onClick= {this.cancel}>Cancel</button>;
        const saveButton = <button key="4" className="edit-buttons" onClick= {this.save}>Save</button>;

        const trash =  <FontAwesomeIcon key="4" icon="trash" onClick= {(e)=> this.props.delete(index,transType)} />;
        const edit =   <FontAwesomeIcon key="5" icon="edit" onClick= {(e)=> this.setState({editMode:true})}/>; 
    
        const editMode = [descriptionInput, amountInput, canclelButton, saveButton];
        const viewMode = [<div key="1" className="transactionDetail"> {description}</div>, 
                            <div key="2" className="amount transactionDetail"> {amount} </div>,
                            <div  key="3" className="transactionDetail">{time}</div>,
                            trash, 
                            edit];    
        return (
        <div className="transactionInfo"> 
            {(this.state.editMode? editMode:viewMode)}
        </div>    
        );
    }    
}

export default Transaction;