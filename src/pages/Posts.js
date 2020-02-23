import React, { useContext, useEffect } from 'react';

// Stores
import { Context } from "../contexts/store";

// Router
import { Link } from "react-router-dom";

// Components
import { Loader } from '../components/Loader';

function Posts() {
    const { store, dispatch } = useContext(Context);

	useEffect(() => {
        !store.posts &&
		fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/posts")
        .then(response => response.json())
        .then(posts => dispatch({ type: "set_posts", payload: posts }))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
    [store.posts, dispatch]);
    
	useEffect(() => {
        !store.users &&
		fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/users")
        .then(response => response.json())
        .then(users => dispatch({ type: "set_users", payload: users }))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
	[store.users, dispatch]);

    if (!store.posts || !store.users) {
		return <Loader />
    }
    
    console.log(store.posts)

    // template de la liste des articles
    return (
        <div className="Posts">
            <h3>Articles</h3>
            <h4>Les articles publiés:</h4>
            {store.posts.map((post, i) => {
                return (
                    <Link key={i} to={"/post/" + post.id} >
                        <div className="Post-excerpt">
                            <p>{post.title.rendered}</p>
                            <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                            <span>Publié le {new Date(post.date).toLocaleDateString()}&nbsp;</span>
                            <span>par {store.users[post.author - 1].name}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}

export { Posts };
