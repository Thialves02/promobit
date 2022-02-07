import React, { useContext, useEffect } from "react";
import { Context } from "../../context/CtxApp";
import Filme from "../Filme/Filme";
import "./Filmes.css";

export default function Filmes() {
  const { pagina, filmes, setFilmes, API_KEY, filmesFiltrados } =
    useContext(Context);

  //useEffect para renderizar os filmes, com a opção de alterar a página quando o filtro não estiver sendo utilizado
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
    [pagina, filmesFiltrados]
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
