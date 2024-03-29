import React, { useContext, useEffect } from "react";

// Stores
import { AppContext } from "../contexts/store";

// Router
import { Link } from "react-router-dom";

// Components
import { Loader } from "../components/Loader";
import { getPosts, getUsers } from "../client/apiConsumer";

function Posts() {
  const {
    store: { posts, users },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (null !== posts) {
      return;
    }
    getPosts().then((posts) => dispatch({ type: "set_posts", payload: posts }));
  }, [posts, dispatch]);

  useEffect(() => {
    if (null !== users) {
      return;
    }
    getUsers().then((users) => dispatch({ type: "set_users", payload: users }));
  }, [users, dispatch]);

  if (!posts || !users) {
    return <Loader />;
  }

  console.log(posts);

  // template de la liste des articles
  return (
    <div className="Posts">
      <header>
        <h1>Articles</h1>
        <h2>Les articles publiés:</h2>
      </header>
      <section className="Posts-list">
        {posts.map((post) => {
          return (
            <Link key={post.id} to={"/post/" + post.id}>
              <div className="Post-excerpt">
                <p>{post.title.rendered}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <span>
                  Publié le {new Date(post.date).toLocaleDateString()}&nbsp;
                </span>
                <span>par {users[post.author - 1].name}</span>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export { Posts };
