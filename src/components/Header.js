import React from 'react';

import Logo from "../assets/Logo.png";

export function Header ({handleToggleModal}) {
    return (
        <header className="header">
            <img src={Logo}></img>
            <button onClick={handleToggleModal}>Nova Transação</button>
        </header>
    )
} 