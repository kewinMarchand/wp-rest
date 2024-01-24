import React, {useContext, useEffect} from 'react';

// Stores
import {AppContext} from "../contexts/store";

// Components
import {Loader} from '../components/Loader';
import {getUsers} from "../client/apiConsumer";

function Users() {
    const {store: {users}, dispatch} = useContext(AppContext);

    useEffect(() => {
            if (null !== users) {
                return
            }
            getUsers()
                .then(users => dispatch({type: "set_users", payload: users}))
        },
        [users, dispatch]);

    if (!users) {
        return <Loader/>
    }

    console.log(users)

    // template de la page des utilisateurs
    return (
        <div className="Users">
            <h3>Utilisateurs</h3>
            <h4>Les utilisateurs actifs:</h4>
            <div className="Users-list">
                {users.map((user, i) => {
                    return (
                        <div key={i}>
                            <picture style={{display: 'flex', paddingBottom: 8}}>
                                <img src={user.avatar_urls[96]} alt={user.name} height='96' width='96'/>
                            </picture>
                            <p>{user.name}</p>
                            <p>{user.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export {Users};
