const selectExpensesTotal = (expenses) => expenses
  .map(({ amount }) => amount )
  .reduce((acc, cur) => acc + cur, 0);
 
export default selectExpensesTotal;