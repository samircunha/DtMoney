import React from 'react';
import { useTransactions } from '../hooks/useTransactions';

import Logo from "../assets/Logo.png";

export function Header () {
    const {isModalOpen, setIsModalOpen} = useTransactions()

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    return (
        <header className="header">
            <img src={Logo}></img>
            <button onClick={handleOpenModal}>Nova Transação</button>
        </header>
    )
} 