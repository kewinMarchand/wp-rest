import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";

// Components
import { PageLayout } from "./layout/PageLayout";
import { Loader } from "./components/Loader";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Post";
import { Pages } from "./pages/Pages";
import { Page } from "./pages/Page";
import { Roads } from "./pages/Roads";
import { Users } from "./pages/Users";

import { get } from "./client/apiConsumer";
import type { Data } from "./client/types/data";

function App() {
  // crée le state "data" et la méthode pour y injecter les données
  const [data, setData] = useState<Data | null>(null);

  // au chargement du composant on va chercher les données et on les injecte dans le state
  useEffect(
    () => {
      get().then((data) => setData(data));
    },
    // le "[]" sert à ne jouer le fetch qu'au montage du composant,
    // sans lui ce serait joué à chaque rendu
    [],
  );

  // si il n'y a pas de données on affiche le loader
  if (!data) {
    return (
      <PageLayout>
        <Loader />
      </PageLayout>
    );
  }

  console.log({ data });

  return (
    <PageLayout data={data}>
      <Routes>
        {/* une route affiche un composant en fonction de l'url */}
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/page/:id" element={<Page />} />
        <Route path="/roads" element={<Roads data={data} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
