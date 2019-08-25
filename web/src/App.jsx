import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import Expenses from './expenses/Expenses';

const StyledApp = styled.div`
  display: flex;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      expenses: [],
      expensesForm: {
        description: '',
        amount: '',
        errors: []
      }
    };
    this.handleDateChanged = this.handleDateChanged.bind(this);
    this.handleRegisterExpenses = this.handleRegisterExpenses.bind(this);
    this.changeExpensesFormValues = this.changeExpensesFormValues.bind(this);
  }

  handleDateChanged(startDate) {
    this.setState({ startDate });
  }

  changeExpensesFormValues(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      expensesForm: { ...prevState.expensesForm, [name]: value }
    }));
  }

  handleRegisterExpenses() {
    const {
      expensesForm: { description, amount },
      expenses,
      startDate: date
    } = this.state;
    this.setState({
      expenses: [...expenses, { description, amount, date }],
      expensesForm: {
        description: '',
        amount: '',
        errors: []
      }
    });
  }

  render() {
    const { expenses, startDate, expensesForm } = this.state;
    return (
      <StyledApp>
        <div>
          <ReactDatePicker inline startDate={startDate} onChange={this.handleDateChanged} />
        </div>
        <div>
          <Expenses
            expensesForm={expensesForm}
            expenses={expenses}
            handleRegisterExpenses={this.handleRegisterExpenses}
            onExpensesFieldChanged={this.changeExpensesFormValues}
          />
        </div>
      </StyledApp>
    );
  }
}

export default App;
