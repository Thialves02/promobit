import React, { useContext } from "react";
import "./Filme.css";
import { parseISO, format } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";
import { Context } from "../../context/CtxApp";

export default function Filme({ imagem, titulo, data, id }) {
  const { refresh, setRefresh } = useContext(Context);
  const firstDate = parseISO(data);
  const formattedDate = format(firstDate, "' ' dd ' ' MMM' ' yyyy' '", {
    locale: ptBR,
  });
  const Refresh = () => {
    setRefresh(!refresh);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link to={`/filme/${id}`} onClick={() => Refresh()}>
      <div className="filme-container">
        <img src={`https://image.tmdb.org/t/p/w300${imagem}`} />
        <h2>{titulo}</h2>
        <h3>{formattedDate}</h3>
      </div>
    </Link>
  );
}
