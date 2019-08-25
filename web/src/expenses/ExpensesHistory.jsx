import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledExpenses = styled.div`
  display: flex;
`;

const ExpensesHistory = ({ expenses }) => (
  <div>
    <h2>Expenses History</h2>
    {expenses.map(expense => (
      <StyledExpenses>
        <span>{expense.date.toString()}</span>
        <span>{expense.description}</span>
        <span>{expense.amount}</span>
      </StyledExpenses>
    ))}
  </div>
);

ExpensesHistory.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      amount: PropTypes.string
    })
  ).isRequired
};
export default ExpensesHistory;
