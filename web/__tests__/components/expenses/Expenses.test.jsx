import React from 'react';
import { shallow } from 'enzyme';
import Expenses from '../../../src/expenses/Expenses';

const props = {
  expensesForm: { description: '', amount: '' },
  expenses: [],
  onExpensesFieldChanged: jest.fn(() => { }),
  handleRegisterExpenses: jest.fn(() => { })
};
const wrapper = shallow(<Expenses {...props} />);

describe('Expenses Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
