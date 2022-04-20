import React, { useState, createContext, useContext} from 'react';

const TransactionsContext = createContext();

export function Transactions ({children}) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <TransactionsContext.Provider  value={{isModalOpen, setIsModalOpen}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export const useTransactions = () => useContext(TransactionsContext);