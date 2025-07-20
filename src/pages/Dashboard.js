// src/pages/Dashboard.js
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function Dashboard() {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <h1>📊 Dashboard</h1>

      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul>
          {}
          {transactions.map((txn) => (
            <li key={txn.id}> {}
              {txn.date} — {txn.description} — {txn.amount} ({txn.type})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Don't forget to export your component so it can be used in App.js or elsewhere
export default Dashboard;