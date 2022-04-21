import React, { useState, createContext, useContext} from 'react';

const TransactionsContext = createContext();

export function Transactions ({children}) {
    

    return (
        <TransactionsContext.Provider>
            {children}
        </TransactionsContext.Provider>
    )
}

export const useTransactions = () => useContext(TransactionsContext);