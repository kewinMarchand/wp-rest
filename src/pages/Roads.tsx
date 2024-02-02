import React from "react";
import { get } from "../client/apiConsumer";
import type { Data } from "../client/types/data";

function Roads(props: { data: Data }) {
  console.log(props);

  Object.keys(props.data.routes).forEach((road) => {
    get(road).then((r) => console.log(r.data?.status, road, ":", r));
  });

  // template de la page des routes de l'api
  return (
    <div className="Roads">
      <header>
        <h1>Routes</h1>
        <h2>Les routes disponibles:</h2>
      </header>
      <section className="flex flex-column flex-gap-2">
        {/* ici on se sert de la props data passée depuis App.tsx */}
        {Object.keys(props.data.routes).map((route, i) => {
          return (
            <div key={i}>
              <p>{route}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export { Roads };
