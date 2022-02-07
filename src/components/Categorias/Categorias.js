import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CtxApp";
import Categoria from "../Categoria/Categoria";
import "./Categorias.css";

export default function Categorias() {
  const { API_KEY } = useContext(Context);
  const [categorias, setCategorias] = useState([]);

  //Carrega todos os gêneros de filmes disponíveis
  useEffect(() => {
    const load = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
      );
      const body = await response.json();
      setCategorias(body.genres);
    };
    load();
  }, []);

  return (
    <section className="categorias-container">
      <h1>
        Milhões de filmes, séries e pessoas <br></br> para descobrir. Explore
        já.
      </h1>
      <p>FILTRE POR:</p>
      <div className="categoria-container">
        {categorias.map((categoria, index) => (
          <Categoria key={index} categoria={categoria.name} id={categoria.id} />
        ))}
      </div>
    </section>
  );
}
