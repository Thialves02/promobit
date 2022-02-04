import React from "react";
import "./Filme.css";
import { parseISO, format } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

export default function Filme({ imagem, titulo, data, id }) {
  const firstDate = parseISO(data);
  const formattedDate = format(firstDate, "' ' dd ' ' MMM' ' yyyy' '", {
    locale: ptBR,
  });

  return (
    <Link to={`/filme/${id}`}>
      <div className="filme-container">
        <img src={`https://image.tmdb.org/t/p/w300${imagem}`} />
        <h2>{titulo}</h2>
        <h3>{formattedDate}</h3>
      </div>
    </Link>
  );
}
