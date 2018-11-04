import React, { Component } from 'react';
import './App.css';
import './components/AccountInfo';
import AccountInfo from './components/AccountInfo';
import Transactions from './components/transactions';

class App extends Component {
  state = {
    firstName : 'Brook',
    lastName : 'Habteselassie',
    incomes : [{description : 'salary', amount :36000, time:'09/03/2018 11:30'},
              {description: 'bonus', amount: 10000, time:'10/03/2018 11:30'},
              {description: 'online courses', amount :5500, time:'08/03/2018 11:30'}],
    expenses : [{description:'rent', amount:18000, time:'09/03/2018 11:30'},
                {description:'shopping', amount: 6000, time:'10/03/2018 11:30'},
                {description: 'travel', amount: 3000, time:'10/03/2018 11:30'}],
    description : '',
    amount : 0,
    transactionType : '',
  }
  
  addIncome (description,amount,time) {  
    this.setState({incomes: [{description, amount,time}, ...this.state.incomes]});
  }

  addExpense (description,amount,time) {    
    //let temp = this.state.expenses.unshift({description, amount,time});
    this.setState({expenses: [ {description, amount,time}, ...this.state.expenses]});
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

  render() {
    return (
      <div>
       <div id="addtransaction">
          <input type="text" id="description" placeholder="description" onChange={this.descriptionInput}/>
          <input type="number" min="0" id="amount" placeholder="amount" onChange={this.amountInput}/> 
          <select name="transactionType" id="transactionType" onChange={this.transTypeInput}>
              <option>Expense</option>
              <option>Income</option>
          </select>
          <button id="addButton" onClick={this.add}>Add</button>
        </div>
        
        <div id="accountInfo">
          <AccountInfo firstName={this.state.firstName} lastName={this.state.lastName} incomes= {this.state.incomes} expenses= {this.state.expenses}/>
        </div>
        <div id="addtransaction">
          <input type="text" id="description" placeholder="description" onChange={this.descriptionInput}/>
          <input type="number" min="0" id="amount" placeholder="amount" onChange={this.amountInput}/> 
          <select name="transactionType" id="transactionType" onChange={this.transTypeInput}>
              <option>Expense</option>
              <option>Income</option>
          </select>
          <button id="addButton" onClick={this.add}>Add</button>
        </div>
        <div id="transactions">
          <div id="summaryCointainer">
            <Transactions title = {'Incomes'} transactions={this.state.incomes}/>
            <Transactions title = {'Expenses'} transactions={this.state.expenses}/>
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
