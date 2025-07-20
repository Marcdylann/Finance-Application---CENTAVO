// src/pages/AddTransaction.js
import { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

function AddTransaction() {
  const [form, setForm] = useState({
    description: '',
    amount: '',
    date: '',
    type: 'income',
  });

  // ✅ Correct function name pulled from context
  const { addTransaction } = useContext(TransactionContext);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTxn = {
      ...form,
      id: crypto.randomUUID(), // ✅ unique ID
    };

    addTransaction(newTxn); // ✅ call context function
    setForm({ description: '', amount: '', date: '', type: 'income' }); // optional: clear form
  };

  return (
    <>
      <h1>➕ Add Transaction</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTransaction;
