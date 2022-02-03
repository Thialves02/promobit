import React, { useContext, useState } from "react";
import { Context } from "../../context/CtxApp";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Categoria.css";

export default function Categoria({ categoria, index, id }) {
  const { filmes, setFilmes, filmesFiltrados, setFilmesFiltrados } =
    useContext(Context);
  const [active, setActive] = useState(false);
  let filtro = JSON.parse(localStorage.getItem("filtro")) || [];

  const filtrarGeneros = () => {
    const filtrar = () => {
      const index = filtro.indexOf(id);
      if (index != -1) {
        filtro.splice(index, 1);
        setActive(!active);
      } else {
        filtro.push(id);
        setActive(!active);
      }
      localStorage.setItem("filtro", JSON.stringify(filtro));

      setFilmesFiltrados(JSON.parse(localStorage.getItem("filtro")));
    };
    filtrar();
    const con = JSON.parse(localStorage.getItem("filtro"));
    const carregarFilmes = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=83a924a233a6fae4e8bb3ece72e1dcd0&with_genres=${con}`
      );
      const body = await response.json();
      setFilmes(body.results);
    };
    carregarFilmes();
    //USAR LOCALSTORAGE
    //INVALID TIME
  };

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
