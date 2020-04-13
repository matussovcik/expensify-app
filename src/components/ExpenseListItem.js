import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <Link to={`/edit/${id}`}>Edit</Link>
    <p>Amount: {amount}</p>
    <p>Created at: {createdAt}</p>
  </div>
);

export default ExpenseListItem;