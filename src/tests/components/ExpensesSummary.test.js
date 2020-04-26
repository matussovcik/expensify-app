import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should get correct number of expenses viewed and the total amount', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should get 1 expense and its amount', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
  expect(wrapper).toMatchSnapshot();
});