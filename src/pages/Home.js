import React from 'react';

function Home(props) {
    // template de la page d'accueil
    return (
        <div className="Home">
            <h3>Accueil</h3>
            <h4>Les routes disponibles:</h4>
            {/* ici on se sert de la props data passée depuis App.js */}
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
