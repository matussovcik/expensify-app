import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';

export const ExpensesSummary = (props) => (
  <div>
    <p>Viewing {props.expenses.length} {props.expenses.length === 1 ? 'expense' : 'expenses'} totalling: {selectExpensesTotal(props.expenses)}.</p>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);