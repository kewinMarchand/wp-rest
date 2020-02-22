import React from 'react';

// Assets
import logo from '../logo.svg';

function Loader() {
    return  (
        <figure>
            <img src={logo} className="App-logo" alt="logo" />
        </figure>
    )
}

export { Loader };
