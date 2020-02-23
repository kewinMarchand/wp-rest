import React, { useEffect, useState } from 'react';

// Router
import { withRouter } from "react-router";

// Components
import { Loader } from '../components/Loader';

function Post(props) {
    const [post, setPost] = useState(null)
	useEffect(() => {
		fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/posts/" + props.match.params.id )
		.then(response => response.json())
		.then(post => setPost(post))
    },
    []);
    
    const [users, setUsers] = useState(null)
	useEffect(() => {
		fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/users")
		.then(response => response.json())
		.then(users => setUsers(users))
    },
	[]);

    if (!post || !users) {
		return <Loader />
    }
    
    console.log(props, post)

    // template des articles
    return (
        <div className="Post">
            <div className="Post-content">
                <header className="Post-content-header">
                    <div className="Post-content-return-container">
                        <button onClick={() => props.history.goBack()}>
                            ⟵ Retour
                        </button>
                    </div>
                    <span>Publié le {new Date(post.date).toLocaleDateString()}&nbsp;</span>
                    <span>par {users[post.author - 1].name}</span>
                    <h3>{post.title.rendered}</h3>
                </header>
                <p>{(post.content.rendered).replace(/<[^>]*>?/gm, '')}</p>
            </div>
             
        </div>
    );
}

// with router permet de récupérer les paramètres de l'url, 
// ici l'id du post à afficher
const PostWithRouter = withRouter(Post);

export { PostWithRouter as Post };
