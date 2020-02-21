import React, { useEffect, useState } from 'react';

// Assets
import logo from './logo.svg';

// CSS
import './App.css';

// Components
import Home from "./pages/Home"

function App() {
	// crée le state "data" et la méthode pour y injecter les données
	const [data, setData] = useState(null)
	
	// au chargement du composant on va chercher les données et on les injecte dans le state
	useEffect(() => {
		fetch("https://wp-rest.alwaysdata.net/wp-json/")
		.then(response => response.json())
		.then(data => setData(data))
	},
	// le "[]" sert à ne jouer le fetch qu'au montage du composant, sans lui ce serait joué à chaque rendu
	[]);

	// si il n'y a pas de données on affiche le logo
	if (!data) {
		return  <img src={logo} className="App-logo" alt="logo" />
	}

	// sinon on affiche l'app
	return (
		<div className="App">
			<header className="App-header">
				<h1>{data.name}</h1>
				<h2>{data.description}</h2>
			</header>
			{/* on passe data au composant header */}
			<Home data={data} />
		</div>
	);
}

export default App;
