import React from 'react';

// Router
import { NavLink } from "react-router-dom";

function Footer() {
	return (
        <nav className="App-footer">
            <p>Kewin Marchand &amp; friends&nbsp;{new Date().getFullYear()}</p>
        </nav>
	);
}

export { Footer };
