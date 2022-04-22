import React from 'react';

import Logo from "../assets/Logo.png";

export function Header ({toggleModal}) {
    return (
        <header className="header">
            <img alt='logo' src={Logo}></img>
            <button onClick={toggleModal}>Nova Transação</button>
        </header>
    )
} 