import selectExpensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const expensesEmpty = [];
  expect(selectExpensesTotal(expensesEmpty)).toBe(0);
});

test('should correctly add up 1 expense', () => {
  const expensesOneEl = [expenses[0]];
  expect(selectExpensesTotal(expensesOneEl)).toBe(193);
});

test('should calculate the total amount of expenses', () => {
  expect(selectExpensesTotal(expenses)).toBe(19175217);
});
