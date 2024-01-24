import React from 'react';

// Router
import {NavLink} from "react-router-dom";
import {Data} from "../client/types/data";

function Nav({data}: { data?: Data }) {
    return (
        <nav className="App-nav">
            <a href="/">
                <picture>
                    <img src={data?.site_icon_url} alt={data?.name} height={48} width={48}/>
                </picture>
            </a>
            <ul className="App-nav-links">
                <li>
                    <NavLink to={"/users"}>
                        Utilisateurs
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/posts"}>
                        Articles
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/roads"}>
                        Routes
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export {Nav};
