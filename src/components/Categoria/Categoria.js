import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CtxApp";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Categoria.css";

export default function Categoria({ categoria, index, id }) {
  const { setFilmes, filmesFiltrados, setFilmesFiltrados, pagina } =
    useContext(Context);
  const [active, setActive] = useState(false);

  const filtrarGeneros = () => {
    const index = filmesFiltrados.indexOf(id);
    if (index != -1) {
      let copyArray = [...filmesFiltrados];
      copyArray.splice(index, 1);
      setFilmesFiltrados(copyArray);
      setActive(!active);
    } else {
      setFilmesFiltrados([...filmesFiltrados, id]);
      setActive(!active);
    }
  };

  useEffect(() => {
    if (filmesFiltrados.length > 0) {
      const carregarFilmes = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=83a924a233a6fae4e8bb3ece72e1dcd0&with_genres=${filmesFiltrados}&language=pt-BR`
        );
        const body = await response.json();
        setFilmes(body);
      };
      carregarFilmes();
    } else {
      const API_KEY = "83a924a233a6fae4e8bb3ece72e1dcd0";
      const load = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${pagina}`
        );
        const body = await response.json();
        setFilmes(body);
      };
      load();
    }
  }, [filmesFiltrados]);

  return (
    <div
      key={index}
      onClick={filtrarGeneros}
      className={
        active == false ? "categoria-button" : "categoria-button__active"
      }
    >
      <button>
        {categoria}
        <div className="categoria-button__icon">
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
      </button>
    </div>
  );
}
