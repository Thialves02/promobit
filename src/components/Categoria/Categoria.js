import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CtxApp";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Categoria.css";

export default function Categoria({ categoria, index, id }) {
  const { filmesFiltrados, setFilmesFiltrados } = useContext(Context);
  const [active, setActive] = useState(false);

  //Função para filtrar filmes pelo gênero
  const filtrarGeneros = () => {
    const index = filmesFiltrados.indexOf(id);
    //Condicional para retirar gênero do array caso ele já esteja adicionado
    if (index !== -1) {
      let copyArray = [...filmesFiltrados];
      copyArray.splice(index, 1);
      setFilmesFiltrados(copyArray);
      setActive(!active); //Altera a estilização do botão
    }
    //Condicional para adicionar gênero no array
    else {
      setFilmesFiltrados([...filmesFiltrados, id]);
      setActive(!active); //Altera a estilização do botão
    }
  };

  return (
    <div
      key={index}
      onClick={filtrarGeneros}
      className={
        active === false ? "categoria-button" : "categoria-button__active"
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
