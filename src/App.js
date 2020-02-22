import React, { useEffect, useState } from 'react';

import { Route } from "react-router-dom";

// Components
import PageLayout from './layout/PageLayout'
import Loader from './components/Loader'
import Header from './components/Header'
import Home from "./pages/Home"
import Users from "./pages/Users"

function App() {
	// crée le state "data" et la méthode pour y injecter les données
	const [data, setData] = useState(null)
	
	// au chargement du composant on va chercher les données et on les injecte dans le state
	useEffect(() => {
		fetch("https://wp-rest.alwaysdata.net/wp-json/")
		.then(response => response.json())
		.then(data => setData(data))
	},
    // le "[]" sert à ne jouer le fetch qu'au montage du composant, 
    // sans lui ce serait joué à chaque rendu
	[]);

	// si il n'y a pas de données on affiche le loader
	if (!data) {
		return  (
			<PageLayout>
				<Loader />
			</PageLayout>
		)
    }
	
	return (
		<PageLayout>
			{/* la balise vide est un "fragment" qui permet de renvoyer un objet et pas un array */}
			<>
				{/* on injecte le composant Header en lui passant la data en props */}
				<Header data={data} />
				{/* une route affiche un composant en fonction de l'url */}
				<Route exact path="/users" render={() => <Users />} />
				<Route exact path="/" render={() => <Home data={data} />} />
			</>
		</PageLayout>
	);
}

export default App;
