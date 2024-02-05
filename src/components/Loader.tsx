import React from "react";

// Assets
import logo from "../logo.svg";

function Loader() {
  return (
    <figure>
      <img src={logo} className="App-logo" alt="logo" height="96" width="96" />
    </figure>
  );
}

export { Loader };
