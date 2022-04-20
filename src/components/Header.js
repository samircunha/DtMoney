import React from 'react';
import Logo from "../assets/Logo.png";

export function Header () {
    return (
        <header className="header">
            <img src={Logo}></img>
            <button>Nova Transação</button>
        </header>
    )
} 