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
    },
    []);
    
    const [users, setUsers] = useState(null)
	useEffect(() => {
		fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/users")
		.then(response => response.json())
		.then(users => setUsers(users))
    },
	[]);

    if (!posts || !users) {
		return <Loader />
    }
    
    console.log(posts)

    return (
        <div className="Posts">
            <h3>Articles</h3>
            <h4>Les articles publiés:</h4>
            {posts.map((post, i) => {
                return (
                    <Link key={i} to={"/post/" + post.id} >
                        <div className="Post-excerpt">
                            <p>{post.title.rendered}</p>
                            <p>{(post.excerpt.rendered).replace(/<[^>]*>?/gm, '')}</p>
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
