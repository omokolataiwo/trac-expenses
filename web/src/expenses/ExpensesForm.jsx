import React from 'react';
import PropTypes from 'prop-types';

const ExpensesForm = ({
  description, amount, onChange, onRegisterExpenses
}) => (
  <div>
    <div>
      <input name="description" value={description} onChange={onChange} />
    </div>
    <div>
      <input name="amount" value={amount} onChange={onChange} />
    </div>
    <button type="button" onClick={onRegisterExpenses}>
      Register Expenses
    </button>
  </div>
);

ExpensesForm.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onRegisterExpenses: PropTypes.func.isRequired
};
export default ExpensesForm;
