import React from 'react';
import {NavLink} from "react-router-dom";

function Footer() {
	return (
        <nav className="App-footer container flex pb-3 pt-12">
            <p>Kewin Marchand &amp; friends&nbsp;{new Date().getFullYear()}</p>
            <NavLink to={"/roads"}>
                Routes
            </NavLink>
        </nav>
	);
}

export { Footer };
