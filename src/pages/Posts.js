import React, { useEffect, useState } from 'react';

// Router
import { Link } from "react-router-dom";

// Components
import { Loader } from '../components/Loader';

function Posts() {
    const [posts, setPosts] = useState(null)
	useEffect(() => {
		fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/posts")
		.then(response => response.json())
		.then(posts => setPosts(posts))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
    []);
    
    const [users, setUsers] = useState(null)
	useEffect(() => {
		fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/users")
		.then(response => response.json())
		.then(users => setUsers(users))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
	[]);

    if (!posts || !users) {
		return <Loader />
    }
    
    console.log(posts)

    // template de la liste des articles
    return (
        <div className="Posts">
            <h3>Articles</h3>
            <h4>Les articles publiés:</h4>
            {posts.map((post, i) => {
                return (
                    <Link key={i} to={"/post/" + post.id} >
                        <div className="Post-excerpt">
                            <p>{post.title.rendered}</p>
                            <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                            <span>Publié le {new Date(post.date).toLocaleDateString()}&nbsp;</span>
                            <span>par {users[post.author - 1].name}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}

export { Posts };
