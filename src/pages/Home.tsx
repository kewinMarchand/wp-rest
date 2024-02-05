import React, { useContext, useEffect } from "react";

// Stores
import { AppContext } from "../contexts/store";

// Components
import { Loader } from "../components/Loader";
import { Image } from "../components/Image";
import { getMedias, getPages } from "../client/apiConsumer";

function Home() {
  const {
    store: { pages, medias },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (null !== pages) {
      return;
    }
    getPages().then((pages) => dispatch({ type: "set_pages", payload: pages }));
  }, [pages, dispatch]);

  useEffect(() => {
    if (null !== medias) {
      return;
    }
    getMedias().then((medias) =>
      dispatch({ type: "set_medias", payload: medias }),
    );
  }, [medias, dispatch]);

  const homepage = pages?.find((page) => "accueil" === page.slug);
  const homepageMedia = medias?.find(
    (media) => homepage?.featured_media === media.id,
  );

  if (!homepage || !homepageMedia) {
    return <Loader />;
  }

  console.log({ homepage });

  // template de la page d'accueil
  return (
    <div className="Home">
      <header>
        <h1 className="Home-title">{homepage.title.rendered}</h1>
      </header>
      <section className="grid pt-6">
        <picture className="grid-col-12">
          <Image image={homepageMedia} />
        </picture>
        <div
          className="Home-content container-small pt-6"
          dangerouslySetInnerHTML={{ __html: homepage.content.rendered }}
        />
      </section>
    </div>
  );
}

export { Home };
