import React from 'react';

function Roads(props) {

    console.log(props)

    // template de la page des routes de l'api
    return (
        <div className="Roads">
            <h3>Routes</h3>
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

export { Roads };
