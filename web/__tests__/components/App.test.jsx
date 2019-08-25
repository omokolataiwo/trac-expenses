import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';

const wrapper = shallow(<App />);
const instance = wrapper.instance();

describe('App Component', () => {
  const descriptionFormValue = 'Transport to office';
  const amountFormValue = '1000';

  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when handleDateChanged is called', () => {
    it('sets the state of startDate', () => {
      const date = 'Tue 12 August 2019';

      instance.handleDateChanged(date);
      expect(wrapper.state().startDate).toEqual(date);
    });
  });

  describe('when changeExpensesFormValues is called', () => {
    let event = { preventDefault: () => {}, target: { description: '', value: '' } };

    it('changes the state of description', () => {
      event = { ...event, target: { name: 'description', value: descriptionFormValue } };
      instance.changeExpensesFormValues(event);
      expect(wrapper.state().expensesForm.description).toEqual(descriptionFormValue);
    });

    it('changes the state of value', () => {
      event = { ...event, target: { name: 'amount', value: amountFormValue } };
      instance.changeExpensesFormValues(event);
      expect(wrapper.state().expensesForm.amount).toEqual(amountFormValue);
    });
  });

  describe('when handleRegisterExpenses is called', () => {
    it('sets the add expenses to state', () => {
      instance.setState({
        expensesForm: { description: descriptionFormValue, amount: amountFormValue }
      });
      instance.handleRegisterExpenses();
      const expectedExpenses = wrapper.state().expenses;
      expect(expectedExpenses.length).toEqual(1);
      expect(expectedExpenses[0].description).toEqual(descriptionFormValue);
    });
  });
});
