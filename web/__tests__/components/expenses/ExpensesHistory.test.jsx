import React from 'react';
import { shallow } from 'enzyme';
import ExpensesHistory from '../../../src/expenses/ExpensesHistory';

const props = {
  expenses: [{ description: 'Tranportation to office', amount: '1000', date: 'Tue. August 14 2019' }]
};

const wrapper = shallow(<ExpensesHistory {...props} />);

describe('ExpensesHistory Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
