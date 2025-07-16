import { useState } from 'react';

function AddTransaction() {
  // FIX: useState is now called INSIDE the functional component
  const [form, setForm] = useState({
    description: '',
    amount: '',
    date: '',
    type: 'income',
  });

  return (
    <>
      <h1>➕Add Transaction</h1>
      {/* You would use 'form' and 'setForm' here to manage your input fields */}
      <p>Current description: {form.description}</p>
      {/* Example input: */}
      { <input
        type="text"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      /> }
    </>
  );
}

export default AddTransaction;