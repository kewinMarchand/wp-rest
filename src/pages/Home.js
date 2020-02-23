import React, { useEffect, useState } from 'react';

// Components
import { Loader } from '../components/Loader';
import { Image } from '../components/Image';

function Home(props) {
    const [pages, setPages] = useState(null)
    useEffect(() => {
        fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/pages")
        .then(response => response.json())
        .then(pages => setPages(pages))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
    []);

    const [medias, setMedias] = useState(null)
    useEffect(() => {
        fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/media")
        .then(response => response.json())
        .then(medias => setMedias(medias))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
    []);

    if (!pages || !medias) {
		return <Loader />
    }

    console.log(pages, medias)

    const homepage = pages.find(page => "accueil" === page.slug)
    const homepageMedia = medias.find(media => homepage.featured_media === media.id)
    
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
