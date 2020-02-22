import React from 'react';

// Router
import { NavLink } from "react-router-dom";

function Nav() {
    const activeStyles = { fontWeight: "bold", textDecoration: "underline" }
	return (
        <nav className="App-nav">
            <NavLink exact activeStyle={activeStyles} to={"/"}>
                Home
            </NavLink>
            <NavLink activeStyle={activeStyles} to={"/users"}>
                Utilisateurs
            </NavLink>
            <NavLink activeStyle={activeStyles} to={"/posts"}>
                Articles
            </NavLink>
        </nav>
	);
}

export { Nav };
