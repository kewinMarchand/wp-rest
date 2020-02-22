import React from 'react';

function Header(props) {
    // tout ça ne sert qu'à afficher le message dans la console
    const styles =
        "background: linear-gradient(to left, #B000B5, #BADA55);" +
        "font-size: 40px;" +
        "color: #FFF;" +
        'font-family: "Comic Sans MS", "Comic Sans", cursive;' +
        "line-height: 60px; " +
        "padding: 0 16px;";
    console.groupCollapsed("%c Salut Thomas !!!", styles);
    console.log(props.data)
	console.groupEnd()
	
	return (
        <header className="App-header">
            <h1>{props.data.name}</h1>
            <h2>{props.data.description}</h2>
        </header>
	);
}

export default Header;
