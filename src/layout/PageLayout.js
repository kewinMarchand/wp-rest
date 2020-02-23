import React from 'react';

// Router
import { BrowserRouter as Router } from "react-router-dom";

// CSS
import '../App.css';

// Components
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
/* 
dans page layout on définit l'apparence de l'app, on lui passe sa props "children"
ici ce sera nos pages
*/

function PageLayout(props) {
	// sinon on affiche l'app
	return (
		<div className="App">
			<Router>
				<>
					<Nav />
					<main className="App-main">
						{props.children}
					</main>
					<Footer />
				</>
			</Router>
		</div>
	);
}

export { PageLayout };
