import React, { useEffect, useState } from 'react';

// Router
import { withRouter } from "react-router";

// Components
import { Loader } from '../components/Loader';
import { GoBackBtn } from '../components/GoBackBtn';
import { LikesCounter } from '../components/LikesCounter';

function Post(props) {
    const [post, setPost] = useState(null)
	useEffect(() => {
		fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/posts/" + props.match.params.id )
		.then(response => response.json())
        .then(post => setPost(post))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
    [props.match.params.id]);

    const [users, setUsers] = useState(null)
    useEffect(() => {
        fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/users")
        .then(response => response.json())
        .then(users => setUsers(users))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
    []);

    if (!post || !users) {
		return <Loader />
    }
    
    console.log(props, post, users)

    // template des articles
    return (
        <div className="Post">
            <div>
                <header className="Post-header">
                    <div className="Post-ctas-container">
                        <GoBackBtn />
                        <LikesCounter />
                    </div>
                    <span>Publié le {new Date(post.date).toLocaleDateString()}&nbsp;</span>
                    <span>par {users[post.author - 1].name}</span>
                    <h3>{post.title.rendered}</h3>
                </header>
                <div className="Post-content" dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
            </div>
             
        </div>
    );
}

// with router permet de récupérer les paramètres de l'url, 
// ici l'id du post à afficher
const ComponentWithRouter = withRouter(Post);

export { ComponentWithRouter as Post };
