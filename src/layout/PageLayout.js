import React from 'react';

// Router
import { BrowserRouter as Router } from "react-router-dom";

// CSS
import '../App.css';

// Components
import { Nav } from '../components/Nav'

/* 
dans page layout on définit l'apparence de l'app, on lui passe sa props "children"
ici ce sera nos pages
*/

function PageLayout(props) {
	// sinon on affiche l'app
	return (
		<div className="App">
			<Router>
				<Nav />
				{props.children}
			</Router>
		</div>
	);
}

export { PageLayout };
