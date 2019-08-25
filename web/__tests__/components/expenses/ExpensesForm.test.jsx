import React from 'react';
import { shallow } from 'enzyme';
import ExpensesForm from '../../../src/expenses/ExpensesForm';

const props = {
  description: '',
  amount: '',
  expenses: [],
  onRegisterExpenses: jest.fn(() => { }),
  onChange: jest.fn(() => { }),
  changeExpensesFormValues: jest.fn(() => { })
};
const wrapper = shallow(<ExpensesForm {...props} />);

describe('ExpensesForm Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
