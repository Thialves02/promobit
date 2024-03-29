import React, { useContext } from "react";
import "./Filme.css";
import { parseISO, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";
import { Context } from "../../context/CtxApp";

export default function Filme({ imagem, titulo, data, id }) {
  const { refresh, setRefresh } = useContext(Context);

  //Formatação da data recebida
  const firstDate = parseISO(data);
  const formattedDate = format(firstDate, "' ' dd ' ' MMM' ' yyyy' '", {
    locale: ptBR,
  });

  //Ao clicar em algum filme a página re-renderiza e o usuário é jogado para o topo da página
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
        <img src={`https://image.tmdb.org/t/p/w300${imagem}`} alt={titulo} />
        <h2>{titulo}</h2>
        <h3>{formattedDate}</h3>
      </div>
    </Link>
  );
}
