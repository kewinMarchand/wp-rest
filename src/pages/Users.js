import React, { useContext, useEffect } from 'react';

// Stores
import { Context } from "../contexts/store";

// Components
import { Loader } from '../components/Loader';

function Users(props) {
    const { store, dispatch } = useContext(Context);

	useEffect(() => {
        !store.users &&
		fetch("https://kewin-purjus.alwaysdata.net/wp-json//wp/v2/users")
        .then(response => response.json())
        .then(users => dispatch({ type: "set_users", payload: users }))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
    [store.users, dispatch]);

    if (!store.users) {
		return <Loader />
    }
    
    console.log(store.users)

    // template de la page des utilisateurs
    return (
        <div className="Users">
            <h3>Utilisateurs</h3>
            <h4>Les utilisateurs actifs:</h4>
            {store.users.map((user, i) => {
                return (
                    <div key={i}>
                        <p>{user.name}</p>
                    </div>
                )
            })}
        </div>
    );
}

export { Users };
