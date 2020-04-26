import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { editExpense } from '../../actions/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = expenses[0];
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([expense]);
});

test('should edit an expense', () => {
  const expense = expenses[0];
  const editedExpense = {
    id: '1',
    description: 'Gun',
    note: 'abc Note',
    amount: 9999,
    createdAt: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: editedExpense
  };
  const state = expensesReducer([expense], action);
  expect(state).toEqual([editedExpense]);
});

test('should not edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
