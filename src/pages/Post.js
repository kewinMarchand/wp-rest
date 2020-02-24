import React, { useContext, useEffect } from 'react';

// Stores
import { Context } from "../contexts/store";

// Router
import { withRouter } from "react-router";

// Components
import { Loader } from '../components/Loader';
import { GoBackBtn } from '../components/GoBackBtn';
import { LikesCounter } from '../components/LikesCounter';
import { Image } from '../components/Image';


function Post(props) {
    // dans certains composants j'utilise useState() qui crée une variable et la méthode pour la modifier
    // ici on a souvent besoin des données donc je les stocke dans un store qui est accessible dans toute l'appli grâce à useContext
    // c'est assez complexe pour le moment
    const { store, dispatch } = useContext(Context);

    useEffect(() => {
        // On ne va chercher la donnée que si elle n'est pas déjà présente dans le store
        // On fait la même requête sur la page des articles donc en théorie on l'a
        // Mais si on arrive sur cette page directement avec un lien le store est vide
        // !store.posts && veut dire: si store.posts est nul, alors
        !store.posts &&
        // On va chercher les données à cette url
        fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/posts")
        // quand on a une réponse on la transforme en json
        .then(response => response.json())
        // quand c'est fait on envoie le json dans notre store
        .then(posts => dispatch({ type: "set_posts", payload: posts }))
        // Si ça chie, on log l'erreur
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
    // dans ce tableau on liste les variables qui sont observées, 
    // si elles changent la fonction se rejoue
    [store.posts, dispatch]);

	useEffect(() => {
        !store.users &&
		fetch("https://wp-rest.alwaysdata.net/wp-json/wp/v2/users")
        .then(response => response.json())
        .then(users => dispatch({ type: "set_users", payload: users }))
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
    },
    [store.users, dispatch]);
    
    if (!store.posts || !store.users) {
		return <Loader />
    }

    console.log("store", store)
    console.log("store.posts", store.posts)
    console.log("store.users", store.users)

    // props.match.params.id est l'id de l'article récupéré dans l'url grace à withRouter() 
    // qui nous met à dispositon certaines props utiles comme history, location, match...
    console.log("props.history", props.history)
    console.log("props.location", props.location)
    console.log("props.match", props.match)

    // props.match.params.id est un string, le parseInt() le transforme en nombre pour pouvoir le comparer avec storedPost.id
    console.log("props.match.params.id", props.match.params.id, typeof props.match.params.id)
    console.log("parseInt(props.match.params.id)", parseInt(props.match.params.id), typeof parseInt(props.match.params.id))

    // currentPost = le premier post de store.posts qui répond à la condition
    // find() boucle sur un tableau, storedPost est chaque element du tableau passé en argument à la fonction
    // currentPost = le premier post du store dont l'id est égal à l'argument de l'url
    const currentPost = store.posts.find(storedPost => storedPost.id === parseInt(props.match.params.id))
    
    console.log("currentPost", currentPost)


    console.log("store.pages existe ?", null !== store.pages)
    console.log("store.medias existe ?", null !== store.medias)

// TOM

const article = store.pages.find(page => "posts" === page.slug)
const articleMedia = store.medias.find(media => article.featured_media === media.id)

    // template des articles
    return (
        <div className="Post">
            <div>
                <header className="Post-header">
                    <div className="Post-ctas-container">
                        <GoBackBtn />
                        <LikesCounter />
                    </div>
                    <span>Publié le {new Date(currentPost.date).toLocaleDateString()}&nbsp;</span>
                    <span>par {store.users[currentPost.author - 1].name}</span>
                    <h3>{currentPost.title.rendered}</h3>
                </header>
                <div
                    className="Post-content"
                    dangerouslySetInnerHTML={{__html: currentPost.content.rendered}}
                /> <Image image={articleMedia} />
            </div>
             
        </div>
    );
}

// with router permet de récupérer les paramètres de l'url, 
// ici l'id du post à afficher
const ComponentWithRouter = withRouter(Post);

export { ComponentWithRouter as Post };
