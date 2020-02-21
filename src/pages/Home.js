import React from 'react';

function Home(props) {
    // tout ça ne sert qu'à afficher le message dans la console
    const styles =
        "background: linear-gradient(to left, #B000B5, #BADA55);" +
        "font-size: 40px;" +
        "color: #FFF;" +
        'font-family: "Comic Sans MS", "Comic Sans", cursive;' +
        "line-height: 60px; " +
        "padding: 0 16px;";
    console.groupCollapsed("%c Salut Thomas !!!", styles);
    // ici on se sert des props passées depuis App.js 
    console.log(props.data)
    console.groupEnd()
    // templete de la page d'accueil
    return (
        <div className="Home">
            <h3>Accueil</h3>
            <h4>Les routes disponibles:</h4>
            {Object.keys(props.data.routes).map((route, i) => {
                return (
                    <div key={i}>
                        <p>{route}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Home;
