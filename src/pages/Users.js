import React, { useEffect, useState } from 'react';

// Components
import Loader from '../components/Loader';

function Users(props) {
    const [users, setUsers] = useState(null)
	useEffect(() => {
		fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/users")
		.then(response => response.json())
		.then(users => setUsers(users))
    },
	[]);

    if (!users) {
		return <Loader />
    }
    
    console.log(users)

    // template de la page d'accueil
    return (
        <div className="Users">
            <h3>Utilisateurs</h3>
            <h4>Les utilisateurs actifs:</h4>
            {users.map((user, i) => {
                return (
                    <div key={i}>
                        <p>{user.name}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Users;
