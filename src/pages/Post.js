import React, { useContext, useEffect } from 'react';

// Stores
import { Context } from "../contexts/store";

// Router
import { withRouter } from "react-router";

// Components
import { Loader } from '../components/Loader';
import { GoBackBtn } from '../components/GoBackBtn';
import { LikesCounter } from '../components/LikesCounter';

function Post(props) {
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

    console.log(props, store.posts, store.users)

    const currentPost = store.posts.find(storedPost => storedPost.id === parseInt(props.match.params.id))

    console.log(currentPost)

    // template des articles
    return (
        <div className="Post">
            <div>
                <header className="Post-header">
                    <div className="Post-ctas-container">
                        <GoBackBtn />
                        <LikesCounter currentPost={currentPost} likes={currentPost.acf.likes} />
                    </div>
                    <span>Publié le {new Date(currentPost.date).toLocaleDateString()}&nbsp;</span>
                    <span>par {store.users[currentPost.author - 1].name}</span>
                    <h3>{currentPost.title.rendered}</h3>
                </header>
                <div
                    className="Post-content"
                    dangerouslySetInnerHTML={{__html: currentPost.content.rendered}}
                />
            </div>
             
        </div>
    );
}

// with router permet de récupérer les paramètres de l'url, 
// ici l'id du post à afficher
const ComponentWithRouter = withRouter(Post);

export { ComponentWithRouter as Post };
