import React from 'react';
import PropTypes from 'prop-types';
import ExpensesForm from './ExpensesForm';
import ExpensesHistory from './ExpensesHistory';

const Expenses = ({
  expensesForm: { description, amount },
  expenses,
  onExpensesFieldChanged,
  handleRegisterExpenses
}) => (
  <div>
    <ExpensesForm
      description={description}
      amount={amount}
      onChange={onExpensesFieldChanged}
      onRegisterExpenses={handleRegisterExpenses}
    />
    <ExpensesHistory expenses={expenses} />
  </div>
);

Expenses.propTypes = {
  onExpensesFieldChanged: PropTypes.func.isRequired,
  handleRegisterExpenses: PropTypes.func.isRequired,
  expensesForm: PropTypes.shape({
    description: PropTypes.string,
    amount: PropTypes.string
  }).isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Expenses;
