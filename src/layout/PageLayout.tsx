import React, {ReactElement} from 'react';
import {ContextProvider} from "../contexts/store";

// Router
import {BrowserRouter as Router} from "react-router-dom";

// CSS
//import '../App.css';

// SCSS
import "../styles/main.scss";

// Components
import {Nav} from '../components/Nav'
import {Footer} from '../components/Footer'

// Lib pour les metas
import {Helmet} from "react-helmet";

// types
import type {Data} from "../client/types/data";

/* 
dans page layout on définit l'apparence de l'app, on lui passe sa props "children"
ici ce sera nos pages
On gére aussi les metas de la page avec Helmet
*/
const PageLayout = ({children, data}: { children: ReactElement | ReactElement[], data?: Data }) => {
    return (
        <>
            {data &&
                <Helmet>
                    <title>{data.name}</title>
                    <meta name="description" content={data.description}/>
                    <link rel="canonical" href={data.url}/>
                    <link rel="icon" href={data.site_icon_url}/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400&display=swap" rel="stylesheet"/>
                </Helmet>
            }
            <div className="App">
                <ContextProvider>
                    <Router>
                        <>
                            <Nav data={data}/>
                            <main className="App-main container flex-grow pt-12">
                                {children}
                            </main>
                            <Footer/>
                        </>
                    </Router>
                </ContextProvider>
            </div>
        </>
    );
}

export {PageLayout};
