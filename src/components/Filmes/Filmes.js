import React, { useContext, useEffect } from "react";
import { Context } from "../../context/CtxApp";
import Filme from "../Filme/Filme";
import "./Filmes.css";

export default function Filmes() {
  const { pagina, filmes, setFilmes, API_KEY } = useContext(Context);

  //useEffect para renderizar os filmes populares, com a opção de alterar a página
  useEffect(
    () => {
      const load = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${pagina}`
        );
        const body = await response.json();
        setFilmes(body);
      };
      load();
    },
    //useEffect irá executar novamente se a variavel for alterada
    [pagina]
  );

  return (
    <section className="filmes-container">
      {filmes.results !== undefined &&
        filmes.results.map((filme, index) => (
          <Filme
            key={index}
            imagem={filme.poster_path}
            titulo={filme.title}
            data={filme.release_date}
            id={filme.id}
          />
        ))}
    </section>
  );
}
