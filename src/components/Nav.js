import React from 'react';

// Router
import { NavLink } from "react-router-dom";

function Nav() {
    const activeStyles = { borderBottom: "1px solid #FFF", fontWeight: 700 }
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
            <NavLink activeStyle={activeStyles} to={"/roads"}>
                Routes
            </NavLink>
        </nav>
	);
}

export { Nav };
