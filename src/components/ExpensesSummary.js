import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';

export const ExpensesSummary = (props) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Viewing 
        <span> {props.expenses.length} </span> 
        {props.expenses.length === 1 ? 'expense' : 'expenses'} totalling: 
        <span> {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}</span>.
      </h1>
      <div className="page-header__actions">
        <Link className="btn" to="/create">Add Expense</Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);