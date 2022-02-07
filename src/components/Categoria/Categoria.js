import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CtxApp";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Categoria.css";

export default function Categoria({ categoria, index, id }) {
  const { setFilmes, filmesFiltrados, setFilmesFiltrados, pagina, API_KEY } =
    useContext(Context);
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

  useEffect(
    () => {
      //Se o array estiver preenchido por algum gênero os filmes irão aparecer baseados no gênero selecionado
      if (filmesFiltrados.length > 0) {
        const carregarFilmes = async () => {
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=83a924a233a6fae4e8bb3ece72e1dcd0&with_genres=${filmesFiltrados}&language=pt-BR`
          );
          const body = await response.json();
          setFilmes(body);
        };
        carregarFilmes();
      }
      //Se o array não receber nenhum gênero os filmes populares irão aparecer
      else {
        const load = async () => {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${pagina}`
          );
          const body = await response.json();
          setFilmes(body);
        };
        load();
      }
    },
    //useEffect irá executar novamente se a variavel for alterada
    [filmesFiltrados]
  );

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
