import React from "react";
import "./Filme.css";

export default function Filme({ imagem, titulo, data }) {
  return (
    <div className="filme-container">
      <img src={`https://image.tmdb.org/t/p/w300${imagem}`} />
      <h2>{titulo}</h2>
      <h3>{data}</h3>
    </div>
  );
}
