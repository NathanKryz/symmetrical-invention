// Belongs to the main container, doesn't require anything extra
import React from 'react';


export default function footer () {
    return (
    <ul className ="nav nav-tabs">

        <li className="nav-item">
            <a href="https://github.com/NathanKryz" className="nav-link"> Github </a>
        </li>
        <li className="nav-item">
            <a href="https://www.linkedin.com/in/nathan-kryzanowski-020714257/" className="nav-link"> LinkedIn</a>
        </li>
        <li className ="nav-item">
            <a href="https://stackoverflow.com/users/20536138/nkryz" className="nav-link">Stack Overflow</a>
        </li>
    </ul>
    );

}