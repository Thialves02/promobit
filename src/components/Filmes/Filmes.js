import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CtxApp";
import Filme from "../Filme/Filme";
import "./Filmes.css";

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const { pagina } = useContext(Context);
  console.log(pagina);
  useEffect(() => {
    const API_KEY = "83a924a233a6fae4e8bb3ece72e1dcd0";
    const load = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pagina}`
      );
      const body = await response.json();
      setFilmes(body.results);
      console.log(body.results);
    };
    load();
  }, [pagina]);
  return (
    <div className="filmes-container">
      {filmes &&
        filmes.map((filme, index) => (
          <Filme
            imagem={filme.poster_path}
            titulo={filme.title}
            data={filme.release_date}
          />
        ))}
    </div>
  );
}
