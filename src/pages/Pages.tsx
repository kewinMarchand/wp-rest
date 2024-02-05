import React, { useContext, useEffect } from "react";

// Stores
import { AppContext } from "../contexts/store";

// Router
import { Link } from "react-router-dom";

// Components
import { Loader } from "../components/Loader";
import { getPages, getUsers } from "../client/apiConsumer";

function Pages() {
  const {
    store: { pages, users },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (null !== pages) {
      return;
    }
    getPages().then((pages) => dispatch({ type: "set_pages", payload: pages }));
  }, [pages, dispatch]);

  useEffect(() => {
    if (null !== users) {
      return;
    }
    getUsers().then((users) => dispatch({ type: "set_users", payload: users }));
  }, [users, dispatch]);

  if (!pages || !users) {
    return <Loader />;
  }

  console.log(pages);

  // template de la liste des articles
  return (
    <div className="Posts">
      <header>
        <h1>Pages</h1>
        <h2>Les pages publiés:</h2>
      </header>
      <section className="Posts-list">
        {pages.map((page) => {
          return (
            <Link key={page.id} to={"/page/" + page.id}>
              <div className="Post-excerpt">
                <p>{page.title.rendered}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
                />
                <span>
                  Publié le {new Date(page.date).toLocaleDateString()}&nbsp;
                </span>
                <span>par {users[page.author - 1].name}</span>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export { Pages };
