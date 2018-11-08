import React, { Component } from 'react';
import './App.css';
import './components/AccountInfo';
import AccountInfo from './components/AccountInfo';
import Transactions from './components/Transactions';

//import UniqueId from 'react-html-id'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash);

class App extends Component {
 
  state = {
    firstName : 'Brook',
    lastName : 'Habteselassie',
    incomes : [{id: 1, description : 'salary', amount :36000, time:'09/03/2018 11:30'},
              {id: 2, description: 'bonus', amount: 10000, time:'10/03/2018 11:30'},
              {id: 3, description: 'online courses', amount :5500, time:'08/03/2018 11:30'}],
    expenses : [{id: 4, description:'rent', amount:18000, time:'09/03/2018 11:30'},
                {id: 5, description:'shopping', amount: 6000, time:'10/03/2018 11:30'},
                {id: 6, description: 'travel', amount: 3000, time:'10/03/2018 11:30'}],
    description : '',
    amount : 0,
    transactionType : '',
    nextID: 7
  };
   
  addIncome (description,amount,time) { 
    let id = this.state.nextID;
    this.setState({incomes: [{id,description,amount,time}, ...this.state.incomes], nextID: ++id});
  }

  addExpense (description,amount,time) {    
    let id = this.state.nextID;
    this.setState({expenses: [ {id,description,amount,time}, ...this.state.expenses], nextID: ++id});
  }

  descriptionInput = (e) => {
    this.setState({description: e.target.value});
  }
  
  amountInput = (e) => {
    this.setState({amount: e.target.value});
  }

  transTypeInput = (e) => {
    this.setState({transactionType: e.target.value});
  }

  calculateTotal = (accumulator, currentValue) => accumulator + currentValue.amount;  

  totalIncome = ()=>{
    return this.state.incomes.reduce(this.calculateTotal, 0);
  }
  totalExpense = ()=>{     
    return this.state.expenses.reduce(this.calculateTotal, 0);
  }

  balance =  () =>{
    return this.totalIncome() - this.totalExpense();
  }

  render() {
    return (
      <div className="white-background">        
        <div id="accountInfo">
          <AccountInfo firstName={this.state.firstName} lastName={this.state.lastName} balance={this.balance()}/>
        </div>
        <div id="addtransaction">
          <input type="text" id="description" placeholder="description" onChange={this.descriptionInput}/>
          <input type="number" min="0" id="amount" placeholder="amount" onChange={this.amountInput}/> 
          <select name="transactionType" id="transactionType" onChange={this.transTypeInput}>
              <option>Expense</option>
              <option>Income</option>
          </select>
          <button onClick={this.add}>Add</button>
        </div>
        <div id="transactions">
          <div id="summaryCointainer">
            <Transactions transType = {'Incomes'} transactions={this.state.incomes} total={this.totalIncome()} delete={this.delete}/>
            <Transactions transType = {'Expenses'} transactions={this.state.expenses} total={this.totalExpense()} delete={this.delete}/>
          </div>
        </div> 
      </div>
    );
  }

  add = () => {
    let time = this.displayDateTime();
    let description = this.state.description;
    let amount = Number(this.state.amount);
    let type = this.state.transactionType;  
    if(type === 'Income') {
      this.addIncome(description,amount,time);
    }
    else {
      this.addExpense(description,amount,time);
    }    
  } 

  delete = (index, transType) => {
    let array = [] ; 
    if(transType == 'Expenses'){
      array = [...this.state.expenses]; // make a separate copy of the array
      array.splice(index, 1);
      this.setState({expenses: array});
    } else {
      array = [...this.state.incomes]; // make a separate copy of the array
      array.splice(index, 1);
      this.setState({incomes: array});
    }    
  }
  
  displayDateTime = () => {
    var today = new Date();
    var mn = today.getMinutes();
    var hh = today.getHours();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
  
    if(dd<10) {
        dd = '0'+dd
    } 
  
    if(mm<10) {
        mm = '0'+mm
    } 
  
    today = mm + '/' + dd + '/' + yyyy + ' '+  hh + ':' + mn;
    return today;
  }
}

export default App;
