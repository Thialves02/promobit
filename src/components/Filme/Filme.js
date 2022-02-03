import React from "react";
import "./Filme.css";
import { parseISO, format } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";

export default function Filme({ imagem, titulo, data }) {
  const firstDate = parseISO(data);
  const formattedDate = format(firstDate, "' ' dd ' ' MMM' ' yyyy' '", {
    locale: ptBR,
  });

  return (
    <div className="filme-container">
      <img src={`https://image.tmdb.org/t/p/w300${imagem}`} />
      <h2>{titulo}</h2>
      <h3>{formattedDate}</h3>
    </div>
  );
}
