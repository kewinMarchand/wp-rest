import React, { useContext, useEffect } from "react";

// Stores
import { AppContext } from "../contexts/store";

// Router
import { useParams } from "react-router-dom";

// Components
import { Loader } from "../components/Loader";
import { GoBackBtn } from "../components/GoBackBtn";
import { Image } from "../components/Image";
import { getMedias, getPosts, getUsers } from "../client/apiConsumer";

function Page() {
  // dans certains composants j'utilise useState() qui crée une variable et la méthode pour la modifier
  // ici on a souvent besoin des données donc je les stocke dans un store qui est accessible dans toute l'appli grâce à useContext
  // c'est assez complexe pour le moment
  const {
    store: { pages, users, medias },
    dispatch,
  } = useContext(AppContext);

  const { id } = useParams();

  // on récupère l'objet "pages" si il n'est pas disponible
  useEffect(() => {
    if (null !== pages) {
      return;
    }
    getPosts().then((pages) => dispatch({ type: "set_posts", payload: pages }));
  }, [pages, dispatch]);

  // on récupère l'objet "users" si il n'est pas disponible
  useEffect(() => {
    if (null !== users) {
      return;
    }
    getUsers().then((users) => dispatch({ type: "set_users", payload: users }));
  }, [users, dispatch]);

  // on récupère l'objet "medias" si il n'est pas disponible
  useEffect(() => {
    if (null !== medias) {
      return;
    }
    getMedias().then((medias) =>
      dispatch({ type: "set_medias", payload: medias }),
    );
  }, [medias, dispatch]);

  // tant qu'on a pas toutes nos infos on affiche le loader
  if (!pages || !users || !medias) {
    // le return fait que le code en dessous n'est pas lu
    return <Loader />;
  }

  // quand on les a on peut continuer
  console.log("store.posts", pages);
  console.log("store.users", users);
  console.log("store.medias", medias);

  // currentPost = le premier post de store.posts qui répond à la condition
  // find() boucle sur un tableau, storedPost est chaque element du tableau passé en argument à la fonction
  // currentPost = le premier post du store dont l'id est égal à l'argument de l'url
  const currentPage = id
    ? pages.find((storedPage) => storedPage.id === parseInt(id))
    : undefined;
  console.log("currentPost", currentPage);
  const articleMedia = medias.find(
    (media) => currentPage?.featured_media === media.id,
  );

  if (!currentPage) {
    return <Loader />;
  }

  // template des articles
  return (
    <div className="Post">
      <header className="Post-header">
        <div className="position-absolute">
          <GoBackBtn />
        </div>
        <span>
          Publié le {new Date(currentPage.date).toLocaleDateString()}&nbsp;
        </span>
        <span>par {users[currentPage.author - 1].name}</span>
        <h1>{currentPage.title.rendered}</h1>
      </header>
      <section className="grid pt-6">
        <picture className="grid-col-12">
          {/* on affiche l'image que si il y en a une */}
          {articleMedia && <Image image={articleMedia} />}
        </picture>
        <div
          className="Post-content container-small pt-6"
          dangerouslySetInnerHTML={{ __html: currentPage.content.rendered }}
        />
      </section>
    </div>
  );
}

export { Page };
