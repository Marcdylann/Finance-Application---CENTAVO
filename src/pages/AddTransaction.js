import { useState } from 'react';

function AddTransaction() {
  const [form, setForm] = useState({
    description: '',
    amount: '',
    date: '',
    type: 'income',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); 
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
