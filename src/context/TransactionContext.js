import { createContext, useState } from "react";

export const TransactionContext = createContext();

export function TransactionProvider({children}){
    const [transactions, setTransactions] = useState([]);

    const AddTransaction = (newTxn) => {
        setTransactions ((prev) => [...prev, newTxn]);
    };

    return (
        <TransactionContext.Provider value ={{transactions, AddTransaction}}>
            {children}
        </TransactionContext.Provider>
    );
}