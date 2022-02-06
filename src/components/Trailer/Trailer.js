import React, { useContext } from "react";
import { Context } from "../../context/CtxApp";
import "./Trailer.css";

export default function Trailer() {
  const { trailer } = useContext(Context);

  return (
    <div className="trailer-container">
      <h1>Trailer</h1>
      {trailer.length >= 1 ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailer[0].key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        "Trailer não disponível"
      )}
    </div>
  );
}
