import React, { useContext, useEffect } from 'react';

// Stores
import { Context } from "../contexts/store";

// Components
import { Loader } from '../components/Loader';
import { Image } from '../components/Image';

function Home() {
    const { store, dispatch } = useContext(Context);

    useEffect(() => {
        !store.pages &&
        fetch("https://kewin-purjus.alwaysdata.net/wp-json/wp/v2/pages")
        .then(response => response.json())
        .then(pages => dispatch({ type: "set_pages", payload: pages }))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
    [store.pages, dispatch]);

    useEffect(() => {
        !store.medias &&
        fetch("https://kewin-purjus.alwaysdata.net/wp-json/wp/v2/media")
        .then(response => response.json())
        .then(medias => dispatch({ type: "set_medias", payload: medias }))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
    [store.medias, dispatch]);
    
    if (!store.pages || !store.medias) {
		return <Loader />
    }

    const homepage = store.pages.find(page => "accueil" === page.slug)
    const homepageMedia = store.medias.find(media => homepage.featured_media === media.id)
    
    console.log(homepage, homepageMedia)

    // template de la page d'accueil
    return (
        <div className="Home">
            <h3>{homepage.title.rendered}</h3>
            <Image image={homepageMedia} />
            <div className="Home-content" dangerouslySetInnerHTML={{__html: homepage.content.rendered}}/>
        </div>
    );
}

export { Home };
