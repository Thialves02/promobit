import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CtxApp";
import "./Elenco.css";

export default function Elenco() {
  const { credits } = useContext(Context);
  const [cast, setCast] = useState([]);

  //useEffect assincrono que pega os dados do elenco
  useEffect(
    () => {
      (async () => {
        const creditsArray = credits.cast;
        const newCredits = creditsArray.slice(0, 20);
        setCast(newCredits);
      })();
    },
    //useEffect irá executar novamente se a variavel for alterada
    [credits]
  );

  return (
    <div className="cast-container">
      <h1>Elenco original</h1>
      <div className="cast">
        {cast &&
          cast.map(
            (person, index) =>
              person.profile_path !== null && (
                <div className="cast-person" key={index}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                    alt={person.name}
                  />
                  <h2>{person.name}</h2>
                  <p>{person.character}</p>
                </div>
              )
          )}
      </div>
    </div>
  );
}
