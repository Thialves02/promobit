import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CtxApp";
import "./Elenco.css";

export default function Elenco() {
  const { credits } = useContext(Context);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (credits.length != 0) {
      const creditsArray = credits.cast;
      const newCredits = creditsArray.slice(0, 20);
      setCast(newCredits);
    }
  }, [credits]);

  return (
    <div className="cast-container">
      <h1>Elenco original</h1>
      <div className="cast">
        {cast &&
          cast.map((person, index) => (
            <div className="cast-person">
              <img
                src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
              />
              <h2>{person.name}</h2>
              <p>{person.character}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
